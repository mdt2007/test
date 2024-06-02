import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const logoutBtn = document.querySelector("#logout");
const xulyDangxuat = () => {
    signOut(auth).then(() => {
        alert("thành công")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
} 
logoutBtn.addEventListener("click", xulyDangxuat);