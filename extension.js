const vscode = require('vscode');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

let idleTimer;
let repeatTimer;
let isEnabled = true;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Idle Alert Extension está agora ativa.');

    const getConfig = () => vscode.workspace.getConfiguration('idleAlert');

    const resetTimer = () => {
        if (!isEnabled) return;

        if (idleTimer) clearTimeout(idleTimer);
        if (repeatTimer) clearInterval(repeatTimer);

        const minutes = getConfig().get('minutesBeforeAlert', 5);
        const ms = minutes * 60 * 1000;

        idleTimer = setTimeout(() => triggerAlert(), ms);
    };

    // 🔊 MÉTODO ORIGINAL (FUNCIONAVA)
    const playSound = (audioFile) => {
        if (!fs.existsSync(audioFile)) {
            vscode.window.showErrorMessage(`Arquivo não encontrado: ${audioFile}`);
            console.error("Arquivo não encontrado:", audioFile);
            return;
        }

        const normalizedPath = path.normalize(audioFile);

        const command = `powershell -c "[System.Media.SoundPlayer]::new('${normalizedPath}').PlaySync()"`;

        console.log("Executando:", command);

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error("Erro ao tocar áudio:", error);
                vscode.window.showErrorMessage("Erro ao tocar o som.");
                return;
            }

            if (stderr) {
                console.error("stderr:", stderr);
            }
        });
    };

    const triggerAlert = () => {
        if (!isEnabled) return;

        const config = getConfig();
        const customPath = config.get('customAudioPath', '');
        const repeat = config.get('repeat', false);

        vscode.window.showWarningMessage('Você está ocioso! Hora de voltar ao trabalho.');

        const audioFile = customPath || path.resolve(context.extensionPath, 'assets', 'alert.wav');

        console.log("Caminho do áudio:", audioFile);

        playSound(audioFile);

        // 🔁 repetição
        if (repeat) {
            repeatTimer = setInterval(() => {
                if (!isEnabled) return;

                vscode.window.showWarningMessage('Ainda ocioso...');
                playSound(audioFile);
            }, 60000);
        }
    };

    // 🔘 comandos
    const enableCmd = vscode.commands.registerCommand('idleAlert.enable', () => {
        isEnabled = true;
        vscode.window.showInformationMessage('Idle Alert ativado');
        resetTimer();
    });

    const disableCmd = vscode.commands.registerCommand('idleAlert.disable', () => {
        isEnabled = false;

        if (idleTimer) clearTimeout(idleTimer);
        if (repeatTimer) clearInterval(repeatTimer);

        vscode.window.showInformationMessage('Idle Alert desativado');
    });

    const testCmd = vscode.commands.registerCommand('idleAlert.testAlert', () => {
        triggerAlert();
    });

    const subscriptions = [
        vscode.workspace.onDidChangeTextDocument(resetTimer),
        vscode.window.onDidChangeActiveTextEditor(resetTimer),
        vscode.window.onDidChangeTextEditorSelection(resetTimer),
        vscode.workspace.onDidOpenTextDocument(resetTimer)
    ];

    context.subscriptions.push(...subscriptions, enableCmd, disableCmd, testCmd);

    isEnabled = getConfig().get('enabled', true);

    resetTimer();
}

function deactivate() {
    if (idleTimer) clearTimeout(idleTimer);
    if (repeatTimer) clearInterval(repeatTimer);
}

module.exports = {
    activate,
    deactivate
};