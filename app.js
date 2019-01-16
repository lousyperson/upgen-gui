$(() => {
    // Charset
    let numbers = "0123456789";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ascii = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    let allowed_char = ""

    // Initialise variables for html
    let username_len = 7;
    let password_len = 13;
    let pass_upper = true;
    let pass_num = true;
    let pass_spe = true;
    let gen_username = "admin12";
    let gen_password = "adminpassword";

    // Initialise form
    $('#inp-uname-len').val(username_len);
    $('#inp-pass-len').val(password_len);
    $('#inp-spe-char').val(ascii);
    $('#inp-gen-uname').val(gen_username);
    $('#inp-gen-pass').val(gen_password);
    $('#chk-upper').prop('checked', pass_upper);
    $('#chk-num').prop('checked', pass_num);
    $('#chk-spe').prop('checked', pass_spe);

    function generate_username() {
        username_len = parseInt($('#inp-uname-len').val(), 10);

        // Set allowed charset
        allowed_char = "";
        allowed_char += numbers;
        allowed_char += lowercase;

        // Generate username with Math.random()
        gen_username = "";
        for (let i = 0; i < username_len; i++) {
            gen_username += allowed_char.charAt(Math.floor(Math.random() * allowed_char.length));
        }

        return gen_username;
    }

    function generate_password() {
        password_len = parseInt($('#inp-pass-len').val(), 10);

        // Set allowed charset
        allowed_char = ""
        allowed_char += lowercase;
        if ($('#chk-upper').prop('checked')) {
            allowed_char += uppercase;
        }
        if ($('#chk-num').prop('checked')) {
            allowed_char += numbers;
        }
        if ($('#chk-spe').prop('checked')) {
            ascii = $('#inp-spe-char').val();
            allowed_char += ascii;
        }

        // Generate password with Math.random()
        gen_password = "";
        for (let i = 0; i < password_len; i++) {
            gen_password += allowed_char.charAt(Math.floor(Math.random() * allowed_char.length));
        }

        return gen_password;
    }

    $("#btn-gen").click(function() {
        $('#inp-gen-uname').val(generate_username);
        $('#inp-gen-pass').val(generate_password);
    });
})