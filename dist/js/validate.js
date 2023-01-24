function kirim() {
    let name = document.getElementById("name");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let cekPass = document.getElementById("cekPass");
    let maxChar = 30;
    let maxUser = 15;
    let patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    let patternPass = /^[A-Za-z]\w{7,14}$/;
    let error = "";

    if (name.value == ""){
        error = "Nama lengkap harus diisi";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (name.value.lenght > maxChar){
        error = "Maksimum 30 Karakter";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (username.value == ""){
        error = "Username harus diisi";
        document.getElementById("error_username").innerHTML = error;
        return false;
    } else if (username.value.lenght > maxUser){
        error = "Maksimum 15 Karakter";
        document.getElementById("error_username").innerHTML = error;
        return false;
    } else if (email == ""){
        error = "Email harus diisi";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if (!patternEmail.test(email.value)){
        error = "Email yang anda masukkan salah";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if (password.value == ""){
        error = "Password harus diisi";
        document.getElementById("error_password").innerHTML = error;
        return false;
    } else if (!patternPass.test(password.value)){
        error = "Password harus memiliki setidaknya satu angka numerik, satu huruf besar dan satu huruf kecil";
        document.getElementById("error_password").innerHTML = error;
        return false;
    } else if (cekPass.value == ""){
        error = "Cek Password harus diisi";
        document.getElementById("error_pass").innerHTML = error;
        return false;
    } else if (!patternPass.test(cekPass.value)){
        error = "Password tidak memenuhi kriteria";
        document.getElementById("error_pass").innerHTML = error;
        return false;
    } else {
        form.setAttribute("action","http://localhost/Project%20Peminjaman%20Ruang%20UAS%20Pemweb/index.html");
        return false;
    }
}

function registrasi() {
    alert("Registrasi Berhasil, Mohon Login Ulang")
}