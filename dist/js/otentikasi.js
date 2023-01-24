function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");

    if (inp_nama == "admin" && inp_pass == "integrity") {
        form.setAttribute("action","http://localhost/Project%20Peminjaman%20Ruang%20UAS%20Pemweb/index.html");
    }else{
        alert("Login Gagal");
        form.setAttribute("action","http://localhost/Project%20Peminjaman%20Ruang%20UAS%20Pemweb/login.html?username=asd&password=wew");
    }
}
