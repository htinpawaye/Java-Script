$(document).ready(function () {
    $('.delete').click(function () {
        let tr = $(this).parent('td').parent('tr');
        console.log(tr);
        let id = tr.attr('id');
        console.log(id);
        tr.hide("slow", function () {
            console.log("Id");
        });
        //tr.remove();
    })

    console.log($('.first').nextAll());
    let last = $('li:last');
    console.log(last);
    console.log($('.first').nextUntil(last));

    last.prevUntil($('.first')).addClass('hot');

    $('.hide').click(function () {
        $('.img').hide("slow");
    })
    $('.show').click(function () {
        $('.img').show(2000, function () {
            console.log("complete");
        });
    })
    $('.toggle').click(function () {
        $('.img').toggle();
    })

    $('.fadein').click(function () {
        $('.img').fadeIn(4000);
    })
    $('.fadeout').click(function () {
        $('.img').fadeOut(2000);
    })
    $('.fadeto').click(function () {
        $('.img').fadeTo("slow", 0.4)
    })
    $('.slidedown').click(function () {
        $('.img').slideDown(4000);
    })
    $('.slideup').click(function () {
        $('.img').slideUp(4000);
    })
})