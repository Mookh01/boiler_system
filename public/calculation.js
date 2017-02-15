//Table of Contents=======================
// - Inputs & message Errors
// - Inputs & selects variables
// - Current program variables
// - Hawkins program variables
// - Savings Calculations
// - Current program class functions
// - Hawkins program class functions
// - Savings Calculations class functions


$(document).ready(function() {

    //============  Calculations & Inputs ============================== 
    $(".recirculatingrate").keyup(function() {
        var1s = $(".recirculatingrate").val();
        if (var1s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();
        } else {
            $('.messageError').html('sorry number only for the first value');
        }
    });

    $(".deltat").keyup(function() {
        var2s = $(".deltat").val();
        if (var2s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();
        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });
    $(".watercost").keyup(function() {
        var3s = $(".watercost").val();
        if (var3s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".concentrationratio").keyup(function() {
        var3s = $(".concentrationratio").val();
        if (var3s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".hawkinsconcentrationratio").keyup(function() {
        var3s = $(".hawkinsconcentrationratio").val();
        if (var3s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".hoursofop").on("change keyup", function() {
        var4s = $(".hoursofop").val();
        sums();
    });

    $(".daysofop").on("change keyup", function() {
        var5s = $(".daysofop").val();
        sums();
    });

    $(".monthsofop").on("change keyup", function() {
        var6s = $(".monthsofop").val();
        sums();
    });

    $(".inhibitortype").keyup(function() {
        var7s = $(".inhibitortype").val();
        if (var7s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });


    $(".inhibitordosage").keyup(function() {
        var8s = $(".inhibitordosage").val();
        if (var8s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".inhibitordensity").keyup(function() {
        var9s = $(".inhibitordensity").val();
        if (var9s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".inhibitorprice").keyup(function() {
        var10s = $(".inhibitorprice").val();
        if (var10s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".biocidedosage").keyup(function() {
        var11s = $(".biocidedosage").val();
        if (var11s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".biocidedensity").keyup(function() {
        var12s = $(".biocidedensity").val();
        if (var12s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    $(".biocideprice").keyup(function() {
        var13s = $(".biocideprice").val();
        if (var13s.match(/^\d+$/)) {
            $('.messageError').html('');
            sums();

        } else {
            $('.messageError').html('sorry number only for the second value');
        }
    });

    function sums(sums) {

        //inputs & selects ==========================================
        var recirculatingrate = parseInt($(".recirculatingrate").val());
        var deltat = parseInt($(".deltat").val());
        var concentrationratio = parseInt($(".concentrationratio").val());
        var hoursofop = parseInt($(".hoursofop").val());
        var daysofop = parseInt($(".daysofop").val());
        var monthsofop = parseInt($(".monthsofop").val());
        var watercost = parseInt($(".watercost").val());

        //hawkins program calculations
        var inhibitordosage = parseInt($(".inhibitordosage").val());
        var inhibitordensity = parseInt($(".inhibitordensity").val());
        var inhibitorprice = parseInt($(".inhibitorprice").val());
        var biocidedosage = parseInt($(".biocidedosage").val());
        var biocidedensity = parseInt($(".biocidedensity").val());
        var biocideprice = parseInt($(".biocideprice").val());

        operator = $(".operator").html();
        var evaporationrate = (recirculatingrate * deltat * 0.00085);
        //current program================================================
        var makeuprate = ((evaporationrate * concentrationratio) / (concentrationratio - 1));
        var blowdownrate = (evaporationrate / (concentrationratio - 1));
        var makeupratepermonth = (((makeuprate * 8.345 * 60 * hoursofop * daysofop) / 1000000) / monthsofop);
        var makeuprateperyear = (((makeuprate * 8.345 * 60 * hoursofop * daysofop) / 1000000))
        var blowdownratepermonth = (((blowdownrate * 8.345 * 60 * hoursofop * daysofop) / 1000000) / monthsofop);
        var blowdownrateperyear = (((blowdownrate * 8.345 * 60 * hoursofop * daysofop) / 1000000));
        //hawkins program================================================
        var hawkinsconcentrationratio = parseInt($(".hawkinsconcentrationratio").val());
        var hawkinsmakeuprate = ((evaporationrate * hawkinsconcentrationratio) / (hawkinsconcentrationratio - 1));
        var hawkinsblowdownrate = (evaporationrate / (hawkinsconcentrationratio - 1));
        var hawkinsmakeupratepermonth = (((hawkinsmakeuprate * 8.345 * 60 * hoursofop * daysofop) / 1000000) / monthsofop)
        var hawkinsmakeuprateperyear = (((hawkinsmakeuprate * 8.345 * 60 * hoursofop * daysofop) / 1000000))
        var hawkinsblowdownratepermonth = (((hawkinsblowdownrate * 8.345 * 60 * hoursofop * daysofop) / 1000000) / monthsofop)
        var hawkinsblowdownrateperyear = (((hawkinsblowdownrate * 8.345 * 60 * hoursofop * daysofop) / 1000000))
            //savings calculations ==========================================

        var watersavingsgpy = ((makeuprate - hawkinsmakeuprate) * 60 * hoursofop * daysofop);
        var watersavingsyear = (watersavingsgpy / 1000 * watercost);

        //hawkins program calculations================================================
        //Inhibitor==================
        var hawkinsInhibitornumbspermonth = (hawkinsblowdownratepermonth * inhibitordosage);
        var hawkinsInhibitornumbsperyear = (hawkinsblowdownrateperyear * inhibitordosage);
        var hawkinsInhibitorgalspermonth = (hawkinsInhibitornumbspermonth / inhibitordensity);
        var hawkinsInhibitorgalsperyear = (hawkinsInhibitornumbsperyear / inhibitordensity);
        var hawkinsInhibitorpricepermonth = (hawkinsInhibitornumbspermonth * inhibitorprice);
        var hawkinsInhibitorpriceperyear = (hawkinsInhibitornumbsperyear * inhibitorprice);
        //Biocide==================
        var hawkinsBiocidenumbspermonth = (hawkinsmakeupratepermonth * biocidedosage);
        var hawkinsBiocidenumbsperyear = (hawkinsmakeuprateperyear * biocidedosage);
        var hawkinsBiocidegalspermonth = (hawkinsBiocidenumbspermonth / biocidedensity);
        var hawkinsBiocidegalsperyear = (hawkinsBiocidenumbsperyear / biocidedensity);
        var hawkinsBiocidepricepermonth = (hawkinsBiocidenumbspermonth * biocideprice);
        var hawkinsBiocidepriceperyear = (hawkinsBiocidenumbsperyear * biocideprice);

        // Total Cooling Tower ==========================================

        var totalcoolingtower1 = (hawkinsInhibitorpriceperyear + hawkinsBiocidepriceperyear);

        //current program================================================
        $(".answer1").html(evaporationrate);
        $(".answer1").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer2").html(makeuprate);
        $(".answer2").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer3").html(blowdownrate);
        $(".answer3").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer4").html(makeupratepermonth);
        $(".answer4").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });
        $(".answer5").html(makeuprateperyear);
        $(".answer5").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });
        $(".answer6").html(blowdownratepermonth);
        $(".answer6").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });
        $(".answer7").html(blowdownrateperyear);
        $(".answer7").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });
        //Hawkins Program ==================================
        $(".answer8").html(hawkinsmakeuprate);
        $(".answer8").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer9").html(hawkinsblowdownrate);
        $(".answer9").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer10").html(hawkinsmakeupratepermonth);
        $(".answer10").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer11").html(hawkinsmakeuprateperyear);
        $(".answer11").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer12").html(hawkinsblowdownratepermonth);
        $(".answer12").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer13").html(hawkinsblowdownrateperyear);
        $(".answer13").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        //Savings Calculations ==================================       
        $(".answer14").html(watersavingsgpy);
        $(".answer14").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer15").html(watersavingsyear);
        $(".answer15").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        //hawkins program inhibitor calculations================================================

        $(".answer16").html(hawkinsInhibitornumbspermonth);
        $(".answer16").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer17").html(hawkinsInhibitornumbsperyear);
        $(".answer17").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer18").html(hawkinsInhibitorgalspermonth);
        $(".answer18").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer19").html(hawkinsInhibitorgalsperyear);
        $(".answer19").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer20").html(hawkinsInhibitorpricepermonth);
        $(".answer20").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer21").html(hawkinsInhibitorpriceperyear);
        $(".answer21").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        //hawkins program biocide calculations================================================
        $(".answer22").html(hawkinsBiocidenumbspermonth);
        $(".answer22").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer23").html(hawkinsBiocidenumbsperyear);
        $(".answer23").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer24").html(hawkinsBiocidegalspermonth);
        $(".answer24").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer25").html(hawkinsBiocidegalsperyear);
        $(".answer25").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer26").html(hawkinsBiocidepricepermonth);
        $(".answer26").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer27").html(hawkinsBiocidepriceperyear);
        $(".answer27").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });

        $(".answer28").html(totalcoolingtower1);
        $(".answer28").each(function(c, obj) {
            $(obj).text(addCommas(parseFloat($(obj).text()).toFixed(2)));
        });


    }






    function addCommas(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }
});