(()=>{const e=document.querySelectorAll(".show-answer"),s=document.querySelectorAll(".faq-item");e.forEach((e=>{e.addEventListener("click",(s=>{s.stopImmediatePropagation(),0==e.classList.contains("close")?(document.querySelectorAll(".faq-item.open").forEach((e=>{e.classList.remove("open")})),document.querySelectorAll(".show-answer.close").forEach((e=>{e.classList.remove("close")})),e.parentElement.classList.add("open"),e.classList.add("close")):(e.parentElement.classList.remove("open"),e.classList.remove("close"))}))})),s.forEach((e=>{e.addEventListener("click",(()=>{document.querySelectorAll(".faq-item.open").forEach((e=>{e.classList.remove("open")})),document.querySelectorAll(".show-answer.close").forEach((e=>{e.classList.remove("close")})),e.classList.add("open"),e.children[1].classList.add("close")}))}))})();