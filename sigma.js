function mostrar() {
    document.getElementById('fdn').style.display = 'block';
    document.getElementById('fdn_').style.display = 'block';
    document.getElementById('fdn1').style.display = 'block';
    document.getElementById('fdn1_').style.display = 'block';
}
function ocultar() {
    document.getElementById('fdn').style.display = 'none';
    document.getElementById('fdn_').style.display = 'none';
    document.getElementById('fdn1').style.display = 'none';
    document.getElementById('fdn1_').style.display = 'none';
}
function mosres() {
    document.getElementById("rest").style.display="inline-block";
    document.getElementById("rest1").style.display="inline-block";
}
function octres() {  
    document.getElementById("rest").style.display="none";
    document.getElementById("rest1").style.display="none";
}
function sigma() {
    var numerador= parseInt(document.getElementById("numerador").value);
    var exponente= parseInt(document.getElementById("exponente").value);
    var multiplicador= parseInt(document.getElementById("multiplicador").value);
    var base=parseInt(document.getElementById("base").value);
    if(isNaN(exponente)){
       exponente=1;
    }
    if(isNaN(multiplicador)){
        multiplicador=1;
    }
    if(isNaN(numerador)){
        numerador=0;
    }
    if(isNaN(base)){
        base=1;
    }
    var formula=exponente;
    var indice1="";
    var ls=0;
    var formNum2="";
    ls1="";
    if(base<numerador){
    document.getElementById("proceso").style.display="block";
    if(base!=1){
        ls=base-1;
        ls1=base+"-1="+ls;
        li=base-ls;
        switch(formula){
            case 0:
                r1=(base-1);
                n=numerador-r1;
                formula=multiplicador*n;
                indice="n-(i-1)";
                indice1=numerador+"-("+base+"-1)";
                formNum=numerador+"-("+base+"-1)";
                formRes=multiplicador+"*("+numerador+"-("+r1+"))";
                formRes1=multiplicador+"*"+n;
                formRes2=multiplicador*n;
                formRes2_1="";
                formRes3="";
                ocultar();
                octres();
                document.getElementById("lim").innerHTML="n-(i-1)";
                document.getElementById("eq").value=multiplicador+"*(x-("+base+"-1))";
                divi="1";
            break;
            case 1:
                formula=multiplicador*(numerador*(numerador+1)/2)-multiplicador*(ls*(base)/2);
                formNum=numerador+"*("+numerador+"+1)";
                formNum2=ls+"*("+ls+"+1)"
                indice="n*(n+1)";
                indice1=numerador+"-("+base+"-1)";
                document.getElementById("eq").value=multiplicador+"x*(x+1)/2-"+multiplicador+"*"+ls+"*("+ls+"+1)/2";
                divi="2";

                n1=numerador+1;
                n2=numerador*n1;            n2_1=ls*base;
                n3=n2/2;                    n3_1=n2_1/2;
                r1=multiplicador*n3;        r2=multiplicador*n3_1

                formRes=multiplicador+"*(("+numerador+"*("+n1+"))/2)-"+multiplicador+"*(("+ls+"*("+base+"))/2)";
                formRes1=multiplicador+"*("+n2+"/2)-"+multiplicador+"*("+n2_1+"/2)";
                formRes2="("+multiplicador+"*"+n3+")-("+multiplicador+"*"+n3_1+")";
                formRes2_1=r1+"-"+r2;
                formRes3=r1-r2;
                mosres();
                mostrar();
                
            break;
            case 2:
                formula=multiplicador*((numerador*(numerador+1)*((2*numerador)+1))/6)-multiplicador*((ls*(ls+1)*((2*ls)+1))/6);
                formText="Variable*((n*(n+1)*((2*n)+1))/6)";
                formNum=numerador+"*("+numerador+"+1)*((2*"+numerador+")+1))";
                formNum2=ls+"*("+ls+"+1)*((2*"+ls+")+1))";
                divi="6";
                indice="n*(n+1)*((2*n)+1)";
                indice1=numerador+"-("+base+"-1)";
                document.getElementById("eq").value=multiplicador+"((x*(x+1)*((2*x)+1))/6)-"+multiplicador+"(("+ls+"*("+ls+"+1)*((2*"+ls+")+1))/6)";
                
                n1=numerador+1;
                n2=numerador*(numerador+1)*((2*numerador)+1);            n2_1=ls*(ls+1)*((2*ls)+1);
                n3=n2/6;                    n3_1=n2_1/6;
                r1=multiplicador*n3;        r2=multiplicador*n3_1

                formRes=multiplicador+"*("+formNum+")/6)-"+multiplicador+"*("+formNum2+")/6)";
                formRes1=multiplicador+"*("+n2+"/6)-"+multiplicador+"*("+n2_1+"/6)";
                formRes2="("+multiplicador+"*"+n3+")-("+multiplicador+"*"+n3_1+")";
                formRes2_1=r1+"-"+r2;
                formRes3=r1-r2;
                mostrar();
                mosres();
            break;
            case 3:
                formText="Variable*(((n)²*(n+1)²)/4)";
                formNum=numerador+"²*("+numerador+"+1)²";
                formNum2=ls+"²*("+ls+"+1)²";
                divi="4";
                indice="n²*(n+1)²";
                indice1=numerador+"-("+base+"-1)";
                document.getElementById("eq").value=multiplicador+"((x^2*(x+1)^2)/4)-"+multiplicador+"(("+ls+"^2*("+ls+"+1)^2)/4)";
                
                n1=numerador+1;
                n1_1=Math.pow(numerador,2);     n1_2=Math.pow(n1,2);
                n2_1=Math.pow(ls,2);            n2_2=Math.pow(base,2);
                n3=n1_1*n1_2;                   n3_1=n2_1*n2_2;
                n4=n3/4;                        n4_1=n3_1/4;
                r1=multiplicador*n4;            r2=multiplicador*n4_1;

                formula=multiplicador*((n1_1*n1_2)/4)-multiplicador*((n2_1*n2_2)/4);

                formRes=multiplicador+"*("+n1_1+"*"+n1_2+"/4)-"+multiplicador+"*("+n2_1+"+"+n2_2+"/4)";
                formRes1="("+multiplicador+"*"+n3+"/4)-("+multiplicador+"*"+n3_1+"/4)";
                formRes2="("+multiplicador+"*"+n4+")-("+multiplicador+"*"+n4_1+")";
                formRes2_1=r1+"-"+r2
                formRes3=r1-r2;
                mostrar();
                mosres();
            break;
            case 4:
                indice="(n*(n+1))*((6*(n³))+(9*(n²))+n-1))";
                formNum=numerador+"*("+numerador+"+1)*((6*("+numerador+"³))+(9*("+numerador+"²))+"+numerador+"-1))";
                formNum2=ls+"*("+ls+"+1)*((6*("+ls+"³))+(9*("+ls+"²))+"+ls+"-1)))";
                divi="30"
                n1=numerador+1;                             n0=ls-1;
                n1_=numerador-1;
                n1_1=Math.pow(numerador,3);                 n1_11=Math.pow(ls,3);
                n1_2=Math.pow(numerador,2);                 n1_21=Math.pow(ls,2);
                n2_1=6*n1_1;                                n2_11=6*n1_11;
                n2_2=9*n1_2;                                n2_21=9*n1_21;
                n3_1=numerador*n1;                          n3_11=ls*base;
                n3_2=n2_1+n2_2+n1_;                         n3_21=n2_11+n2_21+n0;
                n4=n3_1*n3_2;                               n41=n3_11*n3_21;
                n4_=n4/30;                                  n4_1=n41/30;
                r=(multiplicador*n4_)-(multiplicador*n4_1);

                formula=multiplicador*((numerador*(n1))*(n2_1+n2_2+n1_)/30)-multiplicador*(((ls*(base))*(n2_11+n2_21+ls-1))/30);
                document.getElementById("eq").value=multiplicador+"*((x*(x+1))*(6x^3+9x^2+x-1)/30)-"+multiplicador+"*((("+ls+"*("+ls+"+1))*(6*("+ls+"^3)+"+"9*("+ls+"^2)+"+ls+"-1))/30)";

                formRes=multiplicador+"*("+numerador+"*("+n1+"))*((6*"+n1_1+")+(9*"+n1_2+")+"+n1_+"))/30"
                +" - "+multiplicador+"*("+ls+"*("+base+"))*((6*"+n1_11+")+(9*"+n1_21+")+"+n0+"))/30";

                formRes1=multiplicador+"*("+n3_1+"))*("+n2_1+"+"+n2_2+"+"+n1_+"))/30"
                +" - "+multiplicador+"*("+n3_11+")*("+n2_11+"+"+n2_21+"+"+n0+"))/30";
                formRes2=multiplicador+"*("+n4+")/30"
                +" - "+multiplicador+"*("+n41+")/30";
                formRes2_1="("+multiplicador+"*"+n4_+")-("+multiplicador+"*"+n4_1+")";
                formRes3=r;
                mostrar();
                mosres();
            break;
        }
    }
    else{
    document.getElementById("nm").innerHTML="n";
    switch(formula){
        case 0:
            formula=multiplicador*numerador;
            indice="n";
            document.getElementById("eq").value=multiplicador+"*x";
            formNum=numerador;
            formRes=multiplicador*numerador;
            formRes1="";
            formRes2="";
            formRes2_1="";
            formRes3="";
            ocultar();
        break;
        case 1:
            formula=multiplicador*(numerador*(numerador+1)/2);
            indice="n*(n+1)";
            document.getElementById("eq").value=multiplicador+"*(x*(x+1))/2";
            divi="2";
            formNum=numerador+"*("+numerador+"+1)";
            n1=numerador+1;
            n2=numerador*n1;
            n3=n2/2
            formRes=multiplicador+"*(("+numerador+"*("+n1+"))/2)"
            formRes1=multiplicador+"*("+n2+"/2)"
            formRes2=multiplicador+"*"+n3+""
            formRes2_1=multiplicador*n3;
            formRes3="";
            mostrar();
            octres();
        break;
        case 2:
            formula=multiplicador*((numerador*(numerador+1)*((2*numerador)+1))/6);
            indice="n*(n+1)*((2*n)+1)";
            document.getElementById("eq").value=multiplicador+"*(x*(x+1)*((2*x)+1))/6";
            divi="6";
            formNum=numerador+"*("+numerador+"+1)*((2*"+numerador+")+1)";
            n1=numerador+1;
            n1_1=2*numerador;
            n1_2=n1_1+1;
            n2=numerador*n1*n1_2;
            n3=n2/6;
            formRes=multiplicador+"*(("+numerador+"*("+n1+")*("+n1_1+"+1))/6)";
            formRes1=multiplicador+"*(("+numerador+"*("+n1+")*("+n1_2+"))/6)";
            formRes2=multiplicador+"*("+n2+"/6)";
            formRes2_1=multiplicador+"*"+n3;
            formRes3=multiplicador*n3;
            mostrar();
            octres();
        break;
        case 3:
            formula=multiplicador*((Math.pow(numerador,2)*Math.pow(numerador+1,2))/4);
            indice="n²*(n+1)²";
            document.getElementById("eq").value=multiplicador+"*(x^2*(x+1)^2)/4";
            divi="4";
            formNum=numerador+"*("+numerador+"+1)*((2*"+numerador+")+1)";
            formNum=numerador+"²*("+numerador+"+1)²";
            n1=numerador+1;
            n1_1=Math.pow(numerador,2);
            n1_2=Math.pow(n1,2);
            n2=n1_1*n1_2;
            n3=n2/4
            formRes=multiplicador+"*(("+numerador+"²*("+n1+")²)/4)"
            formRes1=multiplicador+"*(("+n1_1+"*"+n1_2+")/4)"
            formRes2=multiplicador+"*("+n2+"/4)"
            formRes2_1=multiplicador+"*"+n3
            formRes3=multiplicador*n3;
            mostrar();
            octres();
        break;
        case 4:
            formula=multiplicador*((numerador*(numerador+1))*((6*(Math.pow(numerador,3)))+(9*(Math.pow(numerador,2)))+numerador-1)/30);
            indice="n*(n+1)*(6n³+9n²+n-1)";
            document.getElementById("eq").value=multiplicador+"*(x*(x+1)*(6x^3+9x^2+x-1))/30";
            divi="30";
            formNum=numerador+"*("+numerador+"+1)*((6*("+numerador+"³))+(9*("+numerador+"²))+"+numerador+"-1)";
            n1=numerador+1;
            n1_=numerador-1;
            n1_1=Math.pow(numerador,3);
            n1_2=Math.pow(numerador,2);
            n2_1=6*n1_1;
            n2_2=9*n1_2;
            n2=(numerador*n1)*(n2_1+n2_2+n1_);
            n3=n2/30
            formRes=multiplicador+"*(("+numerador+"*("+n1+")*((6*("+n1_1+"))+(9*("+n1_2+"))+"+n1_+"))/30)";
            formRes1=multiplicador+"*(("+numerador+"*("+n1+")*(("+n2_1+")+("+n2_2+")+"+n1_+"))/30)";
            formRes2=multiplicador+"*("+n2+"/30)"
            formRes2_1=multiplicador+"*"+n3
            formRes3=multiplicador*n3;
            mostrar();
            octres();
        break;
    }
    }}else{
        document.getElementById("proceso").style.display="none";
        indice="";
        formNum="";
        formNum2="";
        formula="0";
        divi="";
        multiplicador="";
        numerador="";
    }
    document.getElementById("resultado").value=formula;

    document.getElementById("indi").innerHTML=indice;
    document.getElementById("indi_").innerHTML=indice;
    document.getElementById("indi1").innerHTML=formNum;
    document.getElementById("indi1_").innerHTML=formNum2;

    document.getElementById("divi_").innerHTML=divi;
    document.getElementById("divi1_").innerHTML=divi;
    document.getElementById("divi").innerHTML=divi;
    document.getElementById("divi1").innerHTML=divi;

    document.getElementById("variable").innerHTML=multiplicador;
    document.getElementById("variable_").innerHTML=multiplicador;

    document.getElementById("lim").innerHTML=numerador;
    document.getElementById("lim1").innerHTML=ls1;

    document.getElementById("form-res").innerHTML=formRes;
    document.getElementById("form-res-1").innerHTML=formRes1
    document.getElementById("form-res-2").innerHTML=formRes2;
    document.getElementById("form-res-2.1").innerHTML=formRes2_1;
    document.getElementById("form-res-3").innerHTML=formRes3;
    
}

  function draw() {
    try {
        functionPlot({
            target: '#closed',
            xAxis: {domain: [-2, 12]},
            data: [{
              fn: document.getElementById('eq').value,
              range: [0,  document.getElementById('numerador').value],
              closed: true
            }]
          });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();