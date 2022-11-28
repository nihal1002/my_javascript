        
        
        let a = 1; //number or int datatype
        let b = 'nihu'; //string
        let c = null; // null
        let d = undefined; //undefined
        let e = 1.25; // float
        let f = true; // bolean

        console.log(a,b,c,d,e,f);

        document.write("<h1>"+ b + "</h1>");
        document.write(b);
        document.write(b + "<br>");
        document.write(b + "<br>");

        document.write(typeof(a) + "<br>");
        document.write(typeof(b) + "<br>");
        document.write(typeof(c) + "<br>");
        document.write(typeof(d) + "<br>");
        document.write(typeof(e) + "<br>");
        document.write(typeof(f) + "<br>" + "<br>");

        let str = 'nihu';
        console.log(str);
        document.write(str.length);

        str = str.toUpperCase(); //camelcase
        document.write("<br>" + str);
        str = str.toLowerCase();
        document.write("<br>" + str);
        document.write("<br>" + str);
        document.write("<br>" + str.toUpperCase() + "<br>");

        str = 'we are learning javascript today';
        document.write(str.substr(3,12) + "<br>"); //start fron nxt value and no. of values
        console.log(str);
        document.write(str.indexOf('i') + "<br>");
        document.write(str.substr(-16,10) + '<br>');

        document.write(str.replace('javascript','java') + '<br>');
        document.write(str.replaceAll('e','#') + '<br>')
        document.write(str.replace('we are','I am') + '<br>');