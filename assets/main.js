let userID = document.querySelector("#userID");
let userPassword = document.querySelector("#password");
let userName = document.querySelector("#userName");
let zipCode = document.querySelector("#zipCode");
let userCountry = document.querySelector("#userCountry");
let gender = document.querySelectorAll(".form-sex");
let language = document.querySelectorAll(".form-language");
let submitBtn = document.querySelector(".form-btn");
let checkUserID = () => {
  let statusOfUserID = document.querySelector(".statusOfUserID");
  if (!/^[a-zA-Z0-9]{5,12}$/.test(userID.value)) {
    statusOfUserID.textContent = "Username không hợp lệ. Độ dài 5-12";
    statusOfUserID.style.color = "red";
  } else {
    statusOfUserID.textContent = "";
  }
};
let checkPassword = () => {
  let statusOfUserPassword = document.querySelector(".statusOfUserPassword");
  if (!/^[a-zA-Z0-9]{7,12}$/.test(userPassword.value)) {
    statusOfUserPassword.textContent = "Password không hợp lệ. Độ dài 5-12";
    statusOfUserPassword.style.color = "red";
  } else {
    statusOfUserPassword.textContent = "";
  }
};
let checkName = () => {
  let statusOfName = document.querySelector(".statusOfName");
  if (!/^[a-zA-Z]+$/.test(userName.value)) {
    statusOfName.textContent = "Tên không hợp lệ.";
    statusOfName.style.color = "red";
  } else {
    statusOfName.textContent = "";
  }
};
let checkZipCode = () => {
  let statusOfZipCode = document.querySelector(".statusOfZIPcode");
  if(!/^\d+$/.test(zipCode.value)){
    statusOfZipCode.textContent = "Required. Must numeric only";
    statusOfZipCode.style.color = "red";
  }else{
    statusOfZipCode.textContent = "";
  }
}
let checkCountry = () => {
  let statusOfUserCountry = document.querySelector(".statusOfUserCountry");
  if (userCountry.value === "") {
    statusOfUserCountry.textContent = "Hãy chọn 1 quốc gia.";
    statusOfUserCountry.style.color = "red";
  } else {
    statusOfUserCountry.textContent = "";
  }
};
let checkUserGender = () => {
  let statusOfGender = document.querySelector(".statusOfGender");
  if(![...gender].find(e => e.checked)){
    statusOfGender.textContent = "Required";
    statusOfGender.style.color = "red";
  }else{
    statusOfGender.textContent = "";
  }
}
let checkUserLanguage = () => {
  let statusOfLanguage = document.querySelector(".statusOfLanguage");
  if(![...gender].find(e => e.checked)){
    statusOfLanguage.textContent = "Required";
    statusOfLanguage.style.color = "red";
  }else{
    statusOfLanguage.textContent = "";
  }
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkUserID();
  checkPassword();
  checkName();
  checkZipCode();
  checkCountry();
  checkUserGender();
  checkUserLanguage();
});
