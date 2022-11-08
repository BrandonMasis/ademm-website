const showAnswerBtns = document.querySelectorAll(".show-answer");
const faqItems = document.querySelectorAll(".faq-item");

showAnswerBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();

    if (showBtn.classList.contains("close") == false) {
      document.querySelectorAll(".faq-item.open").forEach((item) => {
        item.classList.remove("open");
      });

      showBtn.parentElement.classList.add("open");
      showBtn.classList.add("close");
    } else {
      showBtn.parentElement.classList.remove("open");
      showBtn.classList.remove("close");
    }
  });
});

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("toketeado");
    document.querySelectorAll(".faq-item.open").forEach((item) => {
      item.classList.remove("open");
    });
    item.classList.add("open");
    item.children[1].classList.add("close");
  });
});
