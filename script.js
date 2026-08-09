/**
 * Naruekot Pundaung — Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksList = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && navLinksList) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksList.classList.toggle('mobile-open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x');
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('mobile-open');
      });
    });
  }

  // 2. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Project Details Modal
  const projectDetails = {
    'kad-kong-ta': {
      title: 'Kad Kong Ta Smart Insight',
      category: 'Web Dashboard & Analytics',
      status: 'In Progress 🟡',
      url: 'https://forlp-bams.vercel.app/settings',
      image: 'Naruekot%20Pundaung/My%20project/Kad%20Kong%20Ta%20Smart%20Insight/Capture.png',
      description: 'ระบบแดชบอร์ดแสดงผลข้อมูลเชิงลึกและการวิเคราะห์ภาพรวมสำหรับเจ้าหน้าที่เทศบาลและผู้ดูแลตลาดกาดกองต้า เพื่อช่วยในการตัดสินใจ การบริหารจัดการพื้นที่ และติดตามข้อมูลสำคัญได้อย่างแม่นยำและรวดเร็วผ่านเว็บแอปพลิเคชัน',
      tech: ['React.js', 'Data Visualization', 'Vercel Deployment', 'Responsive Dashboard', 'RESTful API'],
      highlights: [
        'แดชบอร์ดแสดงสถิติและภาพรวมแบบเรียลไทม์',
        'ระบบจัดการการตั้งค่าและพารามิเตอร์ของระบบ',
        'การออกแบบ UI/UX สไตล์ Modern Clean เพื่อการใช้งานที่คล่องตัว'
      ]
    },
    'web-for-school': {
      title: 'Web for School',
      category: 'School Information Management Portal',
      status: 'Completed 🟢',
      url: '#',
      image: 'Naruekot%20Pundaung/My%20project/Web%20for%20school/Untitled.png',
      description: 'เว็บพอร์ทัลเพื่อการศึกษาและระบบบริหารจัดการข้อมูลสำหรับสถานศึกษา รองรับการเผยแพร่ข่าวสาร ประชาสัมพันธ์ข้อมูลหลักสูตร และโครงสร้างข้อมูลที่เป็นประโยชน์สำหรับนักเรียนและบุคลากร',
      tech: ['HTML5 / CSS3', 'JavaScript', 'Information Architecture', 'Responsive Web Design'],
      highlights: [
        'หน้าแรกและเมนูโครงสร้างข้อมูลโรงเรียนที่เข้าใจง่าย',
        'การจัดหมวดหมู่ข่าวสารและกิจกรรมของสถาบัน',
        'รองรับการแสดงผลบนอุปกรณ์ทุกขนาด (Mobile & Desktop)'
      ]
    },
    'kiosk': {
      title: 'Kiosk Application',
      category: 'Information Kiosk',
      status: 'Completed 🟢',
      url: '#',
      image: 'Naruekot%20Pundaung/My%20project/Kiosk/Untitled.png',
      description: 'เว็บพอร์ทัลเพื่อการศึกษาและระบบบริหารจัดการข้อมูลสำหรับสถานศึกษา รองรับการเผยแพร่ข่าวสาร ประชาสัมพันธ์ข้อมูลหลักสูตร และโครงสร้างข้อมูลที่เป็นประโยชน์สำหรับนักเรียนและบุคลากร',
      tech: ['HTML5 / CSS3', 'JavaScript', 'Information Architecture', 'Responsive Web Design'],
      highlights: [
        'หน้าแรกและเมนูโครงสร้างข้อมูลโรงเรียนที่เข้าใจง่าย',
        'การจัดหมวดหมู่ข่าวสารและกิจกรรมของสถาบัน',
        'รองรับการแสดงผลบนอุปกรณ์ทุกขนาด (Mobile & Desktop)'
      ]
    },
    'zygen-seminar': {
      title: 'DII CAMT x Zygen Data Management',
      category: 'Workshop & Self-Development',
      status: 'Completed 🟢',
      url: '#',
      image: 'Naruekot%20Pundaung/Self-Development/DII%20CAMT%20x%20Zygen/667831604_1382762997223246_7620456792330041729_n.jpg',
      description: 'การเข้าร่วมสัมมนาและเวิร์กช็อปด้านการจัดการข้อมูลระดับองค์กร (Enterprise Data Management) ร่วมกับบริษัท Zygen เรียนรู้กระบวนการ Data Pipeline, Enterprise Architecture และการประยุกต์ใช้เทคโนโลยีข้อมูลในภาคธุรกิจจริง',
      tech: ['Data Management', 'Enterprise Solutions', 'Business Intelligence', 'Analytics'],
      highlights: [
        'ทำความเข้าใจกระบวนการจัดเก็บและบริหารข้อมูลขนาดใหญ่',
        'การประยุกต์ใช้แนวคิด Data Governance และ Analytics ในภาคอุตสาหกรรม',
        'แลกเปลี่ยนประสบการณ์กับผู้เชี่ยวชาญระดับมืออาชีพจาก Zygen'
      ]
    }
  };

  const modalBackdrop = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalStatus = document.getElementById('modalStatus');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalLiveBtn = document.getElementById('modalLiveBtn');

  window.openProjectModal = function(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalStatus.textContent = data.status;
    modalDesc.textContent = data.description;

    // Render Tech Chips
    modalTech.innerHTML = data.tech.map(t => `<span class="project-tag">${t}</span>`).join('');

    // Render Highlights
    if (modalHighlights && data.highlights) {
      modalHighlights.innerHTML = data.highlights.map(h => `<li>${h}</li>`).join('');
    }

    // Live button
    if (data.url && data.url !== '#') {
      modalLiveBtn.style.display = 'inline-flex';
      modalLiveBtn.href = data.url;
    } else {
      modalLiveBtn.style.display = 'none';
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Copy to Clipboard with Toast Notification
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`คัดลอก ${label} เรียบร้อยแล้ว: ${text}`);
    }).catch(() => {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`คัดลอก ${label} เรียบร้อยแล้ว: ${text}`);
    });
  };

  // 5. Contact Form Simulation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value;
      const email = document.getElementById('senderEmail').value;
      const message = document.getElementById('senderMessage').value;

      // Construct mailto link
      const subject = encodeURIComponent(`[Portfolio Contact] ข้อความจากคุณ ${name}`);
      const body = encodeURIComponent(`ชื่อผู้ติดต่อ: ${name}\nอีเมล: ${email}\n\nข้อความ:\n${message}`);
      
      showToast('ขอบคุณสำหรับข้อความ กำลังเปิดโปรแกรมส่งอีเมล...');
      
      setTimeout(() => {
        window.location.href = `mailto:nongjeffy7849@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      }, 1000);
    });
  }
});
