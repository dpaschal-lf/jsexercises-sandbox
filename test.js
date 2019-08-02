function attention( id ){
    $("[data-index="+id+"]").addClass('marked')
}  


function testCode(code){
    $(".marked").removeClass('marked');

    /* student code subbed here*/
    eval(code);
    /* end student subbed code */
    /* start tests */
    if(typeof test === 'undefined'){
        attention(1);
        return "could not find variable <code>test</code>!";
    }
    if(typeof b === 'undefined'){
        attention(1);
        return "could not find variable <code>b</code>!";
    }
    if(b !== 2){
        attention(1);
        return "<code>b</code> should be <code>2</code>, do not change!";
    }
    if(/test *\= *30/.test(code)){
        attention(2);
        return "<code>test</code> Do not manually set test to 30, do it programatically!";
    }
    if(!/var +test *= *60/.test(code)){
        attention(1);
        return "<code>test</code> should start at 60, do not change this";
    }
    if(test !== 30){
        attention(2);
        return "<code>test</code> must be 30 after it is modified.";
    }
    if(/test \/= *[b2]/.test(code)){
        attention(3);
        return "Use the <code>a = a + 1</code> method instead of the <code>a += 1</code> method  ";
    }
    if(/test *\= *test *\/ *2/.test(code)){
        attention(3);
        return "Do not manually use <code>2<code>, use the variable <code>b</code>";
    }
    return true;

    /* end tests */
}

