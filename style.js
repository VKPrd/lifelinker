function toggleAnswer(){
    const answer=document.getElementById("answer");
    const arrow=document.getElementById("arrow");
    const isVisible=answer.style.display === "answer";

    answer.style.display=isVisible ? "none" :"block";
    arrow.classList.toggle("rotate", !isVisible);
}

  const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });