(function() {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');
    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width + 24; // 24px gap
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentIndex);
    });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
        if (currentIndex === idx) {
          // Abrir modal para ampliar o certificado
            openModal(slide.querySelector('img').src, slide.querySelector('img').alt);
        } else {
            currentIndex = idx;
            updateCarousel();
        }
        });
    });

    // Modal para ampliar certificado
    function openModal(src, alt) {
        let modal = document.getElementById('certModal');
            if (!modal) {
            modal = document.createElement('div');
            modal.id = 'certModal';
            modal.innerHTML = `
            <div class="modal__overlay"></div>
            <div class="modal__content">
            <img src="" alt="">
            <button class="modal__close" aria-label="Fechar"><i class="bi bi-x-lg"></i></button>
        </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.modal__close').onclick = closeModal;
        modal.querySelector('.modal__overlay').onclick = closeModal;
    }
        modal.querySelector('img').src = src;
        modal.querySelector('img').alt = alt;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }
    function closeModal() {
        const modal = document.getElementById('certModal');
            if (modal) {
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = 'none'; }, 200);
    }
    }
    // Modal styles
    const modalStyle = document.createElement('style');
    modalStyle.innerHTML = `
        #certModal {
        display: none;
        position: fixed;
        z-index: 9999;
        inset: 0;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.7);
        transition: opacity 0.2s;
        opacity: 0;
    }
        #certModal.show { opacity: 1; display: flex; }
        #certModal .modal__overlay {
        position: absolute;
        inset: 0;
        background: transparent;
    }
        #certModal .modal__content {
        position: relative;
        background: #222;
        border-radius: 12px;
        padding: 16px;
        max-width: 96vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        z-index: 2;
    }
        #certModal img {
        max-width: 90vw;
        max-height: 75vh;
        border-radius: 8px;
        background: #fff;
        object-fit: contain;
    }
        #certModal .modal__close {
        position: absolute;
        top: 8px;
        right: 8px;
        background: #181818;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }

        @media (max-width: 700px) {
        #certModal .modal__content {
        padding: 4px;
    }
        #certModal img {
        max-width: 98vw;
        max-height: 60vh;
        }
    }
    `;
    document.head.appendChild(modalStyle);

    // Inicializa
    updateCarousel();
})();