$(document).ready(function()
{
    url = 'http://localhost/library/public/index.php';

    $('#register-button').click(function(){
        register();
    });

    $('#login-button').click(function(){
        login();
    });
    
    $('#insert-book-button').click(function(){
        insert_book();
    });
    
    $('#borrow-book-button').click(function(){
        borrow_book();
    });

    $('#show-all-books-button').click(function(){
        show_books();
    });
});

function get_user()
{   
    var name = $('#user-name').val();
    var email = $('#user-email').val();
    var password = $('#user-password').val();

    var user_data = {

        "name": name,
        "email": email,
        "password": password,
    }

    return user_data;
}

function get_login()
{   
    var email = $('#login-email').val();
    var password = $('#login-password').val();

    var login_data = {

        "email": email,
        "password": password,
    }

    return login_data;
}

function get_book_data()
{   
    var title = $('#book-title').val();
    var description = $('#book-description').val();

    var book_data = {

        "title": title,
        "description": description,
    }

    return book_data;
}

function get_login()
{   
    var email = $('#login-email').val();
    var password = $('#login-password').val();

    var login_data = {

        "email": email,
        "password": password,
    }

    return login_data;
}

function get_borrow_book_data()
{   
    var title = $('#borrow-book-title').val();
    
    var borrow_book_data = {

        "title": title,
    }

    return borrow_book_data;
}


function register()
{
    var user_data = get_user();
    
    $.ajax({
       
        type:"POST",
        url: url + "/api/create_user",
        data: user_data,
        dataType: 'json',
        
        success:function(response)
        {
            console.log(response);
            sessionStorage.setItem('token', response.token);
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}

function login()
{
    var login_data = get_login();
    
    $.ajax({
       
        type:"POST",
        url: url + "/api/login",
        data: login_data,
        dataType: 'json',
        
        success:function(response)
        {
            console.log(response);
            sessionStorage.setItem('token', response.token);
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}

function insert_book()
{
    var book_data = get_book_data();
    
    $.ajax({
       
        type:"POST",
        url: url + "/api/book",
        data: book_data,
        dataType: 'json',
        headers:
        {
            'Authorization': sessionStorage.getItem('token')
        },
        
        success:function(response)
        {
            console.log(response.token);
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}

function borrow_book()
{
    var borrow_book_data = get_borrow_book_data();
    
    $.ajax({
       
        type:"POST",
        url: url + "/api/lend",
        data: borrow_book_data,
        dataType: 'json',
        headers:
        {
            'Authorization': sessionStorage.getItem('token')
        },
        
        success:function(response)
        {
            console.log(response.token);
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}

function show_books()
{
    $.ajax({
       
        type:"GET",
        url: url + "/api/book",
        dataType: 'json',
        headers:
        {
            'Authorization': sessionStorage.getItem('token')
        },
        
        success:function(response)
        {
            var titulo_0 = response[0];
            console.log(titulo_0);
            //var pene_name = pene.name; 
            var print = JSON.stringify(titulo_0.description);
            $('#show-all-books-div').html(print);
        },
        
        error:function()
        {
            console.log("error")
        }
    });
}



















