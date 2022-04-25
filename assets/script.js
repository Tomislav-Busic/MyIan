const tl = gsap.timeline({defaults: { ease: "power1.out" } }); //koliko dugo želimo da se svaka animacija dogodi

tl.to(".intro .piza img", { height: "45%",width: "45%", duration: 4});
tl.to(".intro .piza img", { y: "50%",height: "100%",width: "100%", duration: 4});
tl.to(".slide", { y: "-150%", duration: 2.5, delay: 0.5});
tl.to(".intro .piza img", { y: "-250%",height: "10%",width: "10%", duration: 1});
tl.to(".intro", { y: "-150%", duration: 2}, "-=1"); 


$(document).ready(function(){
    //pozadina navbara
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });

    //pojavljivanje i micanje menua za mob
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    //micanje navbara kad se scrola
    $(window).on('scroll load', function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        //prepoznavanje sekcija(scroll spy)

        $('section').each(function(){

            let top = $(window).scrollTop();
            let offset = $(this).offset().top -200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    //promjena slike i micanje active sa btn
    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');

        $('#menu-img').attr('src', src);
    });
    //promjena teksta
    $('#btn1').click(function(){
        $('#naslov').html("Možete naručiti za van ili s dostavom | Sesvete");
        $('#tekst').html("Jeste li za društvenu večer uz hrvatsku hranu u našem odličnom restoranu? Želimo vam ljubaznu dobrodošlicu u naš restoran Pizzeria MyIan. Uživajte u slasnim jelima i jedinstvenom ambijentu u našem lokalu. Provedite večer u našem prelijepom, idiličnom vanjskom ambijentu. Kada zahladi, možete se premjestiti na grijani dio terase i nastaviti uživati. Bez obzira na vrijeme – naše klimatizirane prostorije u svako vrijeme su ugodne temperature.");
    });

    $('#btn2').click(function(){
        $('#naslov').html("Top restoran s brunchom");
        $('#tekst').html("Hrvatska kuhinja oduševit će vas velikom ponudom. Čak i za naše najzahtjevnije goste imamo velik broj delicija iz naše ukusne brze hrane i naše odlične gurmanske hrane. Naša delikatna čokolada, naše svježe palačinke ili naše voće sigurno će vas oduševiti između obroka ili kao desert. Dođite na doručak, na brunch, na ručak ili na večeru kod nas! Nudimo vam i gratis pristup WiFi-ju kako biste tijekom boravka kod nas mogli surfati na internetu. Tijekom vašeg posjeta, djeca imaju mogućnost provesti lijepo vrijeme u kutku za igranje. Imamo odvojen dio u koji se pušači mogu diskretno skriti.");
    });

    $('#btn3').click(function(){
        $('#naslov').html("Alergije i posebna prehrana");
        $('#tekst').html("Imamo i vegetarijanska jela na našem jelovniku, kako bismo vas mogli razmaziti ukusnom raznolikošću. Ljudi koji imaju ograničenja u prehrani kod nas se ne moraju odreći raznolikosti zahvaljujući našim vegetarijanskim obrocima. Želimo vam olakšati brigu za zdravlje dok jedete kod nas te dokazati da i zdrava jela mogu biti ukusna.");
    });

    $('#btn4').click(function(){
        $('#naslov').html("Organiziramo i vaše privatno proslave");
        $('#tekst').html("Bez problema ostavite svoj auto na našem besplatnom parkiralištu. Do našeg restorana možete doći bez prepreka. Najbolje još danas rezervirajte svoj stol. Radujemo se vašem dolasku. U vezi toga možete nas jednostavno kontaktirati putem telefona na broj 01 2005 100. Kod nas bez problema plaćate gotovinom ili VISA karticom, beskontaktnim plaćanjem ili Mastercard karticom. Možete i zatražiti da vam se vaša jela jednostavno dostave ili ih naručite za ponijeti. Za svadbe, rođendane ili obiteljske proslave – naše usluge cateringa vaše će slavlje učiniti nezaboravnim. Ni privatne zabave nisu nikakav problem – slobodno se javite. Možete nas posjetiti svakim danom.");
    });

});


$('#naslov').html();
$('#tekst').html('src', src);

