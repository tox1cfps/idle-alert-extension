# 🔔 Idle Alert

Uma extensão para VS Code que alerta o usuário quando ele fica ocioso por muito tempo.
An extension for VS Code that alerts the user when they are idle for too long.

---

## 📦 Download

Baixe a versão mais recente na aba de *Releases*.
Download the latest version from the *Releases* page.

---

## 🇧🇷 Português

### ✨ Funcionalidades

* ⏱ Detecta quando você fica ocioso no VS Code
* 🔔 Exibe um aviso visual
* 🔊 Reproduz um som de alerta
* 🎛 Controle de volume (0 a 1)
* 🔁 Opção de repetir o alerta automaticamente
* 🔘 Possibilidade de ativar/desativar a extensão
* 🎵 Suporte a áudio personalizado

---

### ⚙️ Configurações

Você pode configurar a extensão nas configurações do VS Code:

| Configuração                   | Descrição                              |
| ------------------------------ | -------------------------------------- |
| `idleAlert.enabled`            | Ativa ou desativa a extensão           |
| `idleAlert.minutesBeforeAlert` | Tempo (em minutos) antes do alerta     |
| `idleAlert.repeat`             | Repetir alerta enquanto estiver ocioso |
| `idleAlert.volume`             | Volume do som (0 a 1)                  |
| `idleAlert.customAudioPath`    | Caminho para áudio personalizado       |

---

### 🧪 Comandos disponíveis

* `Idle Alert: Testar Alerta Sonoro`
* `Idle Alert: Ativar`
* `Idle Alert: Desativar`

---

### 📦 Instalação via VSIX (Interface)

1. Baixe o arquivo `.vsix`
2. Abra o VS Code
3. Vá em **Extensões**
4. Clique nos **três pontinhos (⋯)**
5. Clique em **Install from VSIX**
6. Selecione o arquivo `.vsix`

---

### 💻 Instalação via terminal

Você também pode instalar usando o terminal:

```bash
code --install-extension idle-alert-1.0.0.vsix
```

Após a instalação, reinicie o VS Code se necessário.

---

### 📁 Estrutura esperada

Certifique-se de que o arquivo de áudio padrão existe:

```
assets/alert.wav
```

---

## 🇺🇸 English

### ✨ Features

* ⏱ Detects when you are idle in VS Code
* 🔔 Shows a visual warning
* 🔊 Plays an alert sound
* 🎛 Volume control (0 to 1)
* 🔁 Option to repeat the alert
* 🔘 Enable/disable the extension
* 🎵 Custom audio support

---

### ⚙️ Settings

You can configure the extension in VS Code settings:

| Setting                        | Description                      |
| ------------------------------ | -------------------------------- |
| `idleAlert.enabled`            | Enable or disable the extension  |
| `idleAlert.minutesBeforeAlert` | Idle time before alert (minutes) |
| `idleAlert.repeat`             | Repeat alert while idle          |
| `idleAlert.volume`             | Sound volume (0 to 1)            |
| `idleAlert.customAudioPath`    | Custom audio file path           |

---

### 🧪 Available Commands

* `Idle Alert: Test Sound Alert`
* `Idle Alert: Enable`
* `Idle Alert: Disable`

---

### 📦 Install via VSIX (UI)

1. Download the `.vsix` file
2. Open VS Code
3. Go to **Extensions**
4. Click the **three dots (⋯)**
5. Click **Install from VSIX**
6. Select the `.vsix` file

---

### 💻 Install via terminal

You can also install using the terminal:

```bash
code --install-extension idle-alert-1.0.0.vsix
```

After installation, restart VS Code if needed.

---

### 📁 Required structure

Make sure the default audio file exists:

```
assets/alert.wav
```

---

## 🚀 Future Improvements

* ⏳ Pomodoro mode
* 📊 Idle time tracking
* 🔔 Multiple alert sounds
* 🧠 Real system idle detection

---

## 📄 License

MIT
