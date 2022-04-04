function planScroll() 
{
    document.getElementById("plan").scrollIntoView({behavior: 'smooth'});
}

function topScroll()
{
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
}