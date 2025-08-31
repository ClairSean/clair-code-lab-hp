var themeBtn = document.getElementById("theme-btn");

//文档初始化完成后立即执行的js方法
document.addEventListener("DOMContentLoaded", function () {
  //检查浏览器缓存变量中是否有theme变量，如果没有theme，则创建并设置为默认值black
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "black");
  }
  //获取当前主题
  const currentTheme = localStorage.getItem("theme");
  //获取所有初始化拥有theme-black的元素，并转换为数组
  const themeElements = Array.from(
    //getElementsByClassName返回的是动态数组，直接用for遍历修改可能会导致越界，需要转换为静态数组
    document.getElementsByClassName("theme-black")
  );
  //根据theme变量的值，设置css类theme中背景色和文字颜色的值
  changeThemeClass(themeElements, currentTheme);
});

//点击按钮后触发切换主题颜色
themeBtn.addEventListener("click", function () {
  //获取浏览器缓存变量theme
  var theme = localStorage.getItem("theme");
  //根据theme变量的值，设置css类theme中背景色和文字颜色的值
  if (theme === "white") {
    localStorage.setItem("theme", "black");
    const themeElements = Array.from(
      document.getElementsByClassName("theme-white")
    );
    changeThemeClass(themeElements, "black");
  } else if (theme === "black") {
    localStorage.setItem("theme", "white");
    const themeElements = Array.from(
      document.getElementsByClassName("theme-black")
    );
    changeThemeClass(themeElements, "white");
  }
});

//修改元素列表主题类的方法
function changeThemeClass(elements, newTheme) {
  elements.forEach((element) => {
    if (newTheme === "white") {
      element.classList.remove("theme-black");
      element.classList.add("theme-white");
    } else if (newTheme === "black") {
      element.classList.remove("theme-white");
      element.classList.add("theme-black");
    }
  });

  //修改按钮图标
  const themeBtn = document.getElementById("theme-btn");
  if (!themeBtn) {
    return;
  }
  //修改图标的图案及边框颜色
  if (newTheme === "white") {
    themeBtn.innerHTML = `
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="black">
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z">
        </path>
    </svg>`;
    themeBtn.style.borderColor = "black";
  } else if (newTheme === "black") {
    themeBtn.innerHTML = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        ></path>
      </svg>`;
    themeBtn.style.borderColor = "white";
  }
}
