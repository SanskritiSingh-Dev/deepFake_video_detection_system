const videoInput = document.getElementById('videoInput');
const detectBtn = document.getElementById('detectBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultSection = document.getElementById('result');
const resultText = document.getElementById('resultText');

videoInput.addEventListener('change', () => {
  detectBtn.disabled = !videoInput.files.length;
  resultSection.classList.add('hidden');
  resultText.textContent = '';
});

detectBtn.addEventListener('click', () => {
  if (!videoInput.files.length) return;

  loadingSpinner.classList.remove('hidden');
  detectBtn.disabled = true;
  videoInput.disabled = true;
  resultSection.classList.add('hidden');
  resultText.textContent = '';

  // Simulate analysis delay — replace with backend call
  setTimeout(() => {
    loadingSpinner.classList.add('hidden');
    detectBtn.disabled = false;
    videoInput.disabled = false;

    // Simulate random result for demo
    const isDeepfake = Math.random() > 0.5;

    if (isDeepfake) {
      resultText.innerHTML = "⚠️ <strong style='color:#e74c3c'>Warning:</strong> This video appears to be a <strong>deepfake</strong>!";
    } else {
      resultText.innerHTML = "✅ <strong style='color:#27ae60'>Safe:</strong> This video looks <strong>authentic</strong>.";
    }
    resultSection.classList.remove('hidden');
  }, 2500);
});
