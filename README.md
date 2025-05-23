# 🛡️ Deepfake Video Detection System

Welcome to the **Deepfake Video Detection System** – your AI-powered guardian against video manipulation. Built with cutting-edge deep learning techniques, this tool allows everyday users to detect whether a video is real or deepfaked in just a few clicks.

> 🎯 **Mission**: Empower normal users, not just experts, to spot deepfakes and fight misinformation.

---

## 🖼️ Website Preview

![App Screenshot](./screenshots/homepage.png)  
*Elegant UI with intuitive design, bold colors, and simple navigation*

---

## 🚀 Features

- 🎥 Upload `.mp4` videos directly
- 🧠 AI model (CNN, RNN, or Transformer) detects deepfake patterns
- 📊 Displays confidence score
- ✅ Clear Real / Fake result
- 🎨 Modern UI with color theme: `#1A1A1D`, `#3B1C32`, `#6A1E55`, `#A64D79`
- 📱 Responsive design for phones, tablets, and desktops

---

## 🔍 How It Works

1. 📤 Upload a video in `.mp4` format  
2. 🧠 Our model analyzes the facial features, motion patterns, and inconsistencies  
3. ⏱️ Wait a few seconds while our server processes it  
4. 📊 Get a clear result with explanation and confidence score

---

## 🧪 Try Sample Videos

Here are some public test videos you can use:

### ✅ Real Videos
- [Real Sample 1](https://github.com/ondyari/FaceForensics/raw/master/dataset/original_sequences/youtube/c23/videos/000_003.mp4)
- [Real Sample 2](https://github.com/ondyari/FaceForensics/raw/master/dataset/original_sequences/youtube/c23/videos/003_001.mp4)

### ❌ Fake Videos
- [Deepfake Sample 1](https://github.com/ondyari/FaceForensics/raw/master/dataset/manipulated_sequences/DeepFakeDetection/c23/videos/000_003.mp4)
- [Deepfake Sample 2](https://github.com/ondyari/FaceForensics/raw/master/dataset/manipulated_sequences/DeepFakeDetection/c23/videos/003_001.mp4)

---

## 💡 Technologies Used

| Frontend      | Backend       | AI/ML        |
|---------------|---------------|--------------|
| HTML/CSS/JS   | Python Flask  | CNN/RNN/Transformer |
| Bootstrap     | Express.js (Optional) | OpenCV |
| Custom JS Animations | REST API | Keras / PyTorch |

---

## 🛠️ Installation Guide

> 💡 Prerequisites: Python 3.8+, pip, virtualenv

```bash
# Clone the repository
git clone https://github.com/yourusername/deepfake-detector.git
cd deepfake-detector

# Set up Python virtual environment
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
