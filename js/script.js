    //Typing Animation
    const typingText = document.getElementById("typing-text");
	const words = ["Web Developer", "Competitive Coder", "Tech Enthusiast"];
	let wordIndex = 0;
	let charIndex = 0;
	let isTyping = true;
  
	function typeText() {
	  if (charIndex < words[wordIndex].length) {
		typingText.textContent += words[wordIndex].charAt(charIndex);
		charIndex++;
		setTimeout(typeText, 100); // Typing speed (milliseconds)
	  } else {
		isTyping = false;
		setTimeout(backspaceText, 1500); // Delay before backspacing
	  }
	}
  
	function backspaceText() {
	  if (charIndex > 0) {
		typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(backspaceText, 50); // Backspacing speed (milliseconds)
	  } else {
		isTyping = true;
		wordIndex = (wordIndex + 1) % words.length;
		setTimeout(typeText, 500); // Delay before typing next word
	  }
	}
  
	typeText();
    
    
    // Slider Js
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let slideIndex = 0;

    prevBtn.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slider.childElementCount - 1;
        }
        updateSliderPosition();
    });

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= slider.childElementCount) {
            slideIndex = 0;
        }
        updateSliderPosition();
    });

    function updateSliderPosition() {
        const boxWidth = slider.querySelector('.box').offsetWidth;
        const translateX = -slideIndex * boxWidth;
        slider.style.transform = `translateX(${translateX}px)`;
    }

    