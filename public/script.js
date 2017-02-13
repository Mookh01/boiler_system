  $(function() {
      var countc = 1;
      $("#chemfeed").click(function() {
          countc++;
          var newRowContent1 = "<tr><th scope='row'>" + countc + "</th><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td></tr>";
          $(newRowContent1).appendTo($("#tbl1EntAttributes"));

      });

      $('#remove1').on("click", function() {
          countc--;
          $('#tbl1EntAttributes tr:last').remove();
      });



      var countt = 1;

      $("#testing").click(function() {
          countt++;
          var newRowContent2 = "<tr><th scope='row'>" + countt + "</th><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td></tr>";
          $(newRowContent2).appendTo($("#tbl2EntAttributes"));

      });

      $('#remove2').on("click", function() {
          countt--;
          $('#tbl2EntAttributes tr:last').remove();
      });


      var waterc = 1;

      $("#watercare").click(function() {
          waterc++;
          var newRowContent3 = "<tr><th scope='row'>" + waterc + "</th><td>Cooling Tower</td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td></tr>";
          $(newRowContent3).appendTo($("#tbl3EntAttributes"));

      });

      $('#remove3').on("click", function() {
          waterc--;
          $('#tbl3EntAttributes tr:last').remove();
      });

      var boilerc = 1;

      $("#boilercare").click(function() {
          boilerc++;
          var newRowContent4 = "<tr><th scope='row'>" + boilerc + "</th><td>Boiler</td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td><td><input></input></td></tr>";
          $(newRowContent4).appendTo($("#tbl4EntAttributes"));

      });

      $('#remove4').on("click", function() {
          boilerc--;
          $('#tbl4EntAttributes tr:last').remove();
      });



  });