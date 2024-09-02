function LANG(lang){
    // input2(lang);
    // alert(lang)
    // 'रीसेट',
    const  l1 = ['सूरज','चंद्रमा','पारा','शुक्र','मंगल','बृहस्पति','शनि','राहु','केतु','रीसेट','नाम','आइकन','डुबालिकेट','चुनना','सीमा रंग','बॉक्स रंग'
        ,'मेनू चुनें','एआरआईएस','वृषभ','मिथुन','कैंसर','सिंह','कन्या','तुल','वृश्चिक','धनुराशि','मकर','कुम्भ','मीन राशि','पूरा नाम','ईमेल आईडी','फोन नंबर'
    ];

    // alert(val)
    switch(lang){
        case 'Hin':
            // alert(l1[0])
            arr(l1);
            break;
        case 'Eng':
            eng();
            break;
        default :
        break;
    }



  }
  
  function arr(l1){
    
    // alert('Akshay')
    document.getElementById('text1').innerHTML=l1[0]
    document.getElementById('text2').innerHTML=l1[1]
    document.getElementById('text3').innerHTML=l1[2]
    document.getElementById('text4').innerHTML=l1[3]
    document.getElementById('text5').innerHTML=l1[4]
    document.getElementById('text6').innerHTML=l1[5]
    document.getElementById('text7').innerHTML=l1[6]
    document.getElementById('text8').innerHTML=l1[7]
    document.getElementById('text9').innerHTML=l1[8]

    
    document.getElementById('clear').innerHTML=l1[9]
    document.getElementById('namemm').innerHTML=l1[10]
    document.getElementById('icons').innerHTML=l1[11]
    // document.getElementById('dub').innerHTML=l1[12]

    document.getElementById('chartlagn').innerHTML = '<h1>लग्न चार्ट</h1>'


    document.getElementById('sel1').innerHTML=l1[13]
    document.getElementById('border').innerHTML=l1[14]
    document.getElementById('box').innerHTML=l1[15]

    document.getElementById('o1').innerHTML=l1[16]
    document.getElementById('o2').innerHTML=l1[17]
    document.getElementById('o3').innerHTML=l1[18]
    document.getElementById('o4').innerHTML=l1[19]
    document.getElementById('o5').innerHTML=l1[20]
    document.getElementById('o6').innerHTML=l1[21]
    document.getElementById('o7').innerHTML=l1[22]
    document.getElementById('o8').innerHTML=l1[23]
    document.getElementById('o9').innerHTML=l1[24]
    document.getElementById('o10').innerHTML=l1[25]
    document.getElementById('o11').innerHTML=l1[26]
    document.getElementById('o12').innerHTML=l1[27]
    document.getElementById('o13').innerHTML=l1[28]

    document.getElementById('fullname').innerHTML=l1[29]
    document.getElementById('mail').innerHTML=l1[30]
    document.getElementById('ph').innerHTML=l1[31]

    document.getElementById('fullname1').innerHTML= 'पूरा नाम'
    document.getElementById('mail2').innerHTML= 'ईमेल आईडी'
    document.getElementById('ph3').innerHTML=  'फोन नंबर' 

    document.getElementById('colorbox').innerHTML ='रंग'
    document.getElementById('penbox').innerHTML = 'कलम'
    document.getElementById('arrowbox').innerHTML = 'तीर'
       document.getElementById('exampleModalLabel').innerHTML=  'यूजर जानकारी'




       document.getElementById('text11').innerHTML = 'सूर';
       document.getElementById('text22').innerHTML = 'चंद्र';
       document.getElementById('text33').innerHTML = 'पार';
       document.getElementById('text44').innerHTML = 'शुक';
       document.getElementById('text55').innerHTML = 'मंग';
       document.getElementById('text66').innerHTML = 'बृह';
       document.getElementById('text77').innerHTML = 'श';
       document.getElementById('text88').innerHTML = 'रा';
       document.getElementById('text99').innerHTML = 'के';

    // display: flex; gap: 1cm; position: relative; left: 9cm;

    document.getElementById('swcl').style.marginLeft = '2cm'
}

function eng(){
        document.getElementById('text1').innerHTML = 'Sun';
        document.getElementById('text2').innerHTML = 'Moon';
        document.getElementById('text3').innerHTML = 'Mercury';
        document.getElementById('text4').innerHTML = 'venus';
        document.getElementById('text5').innerHTML = 'Mars';
        document.getElementById('text6').innerHTML = 'Jupiter';
        document.getElementById('text7').innerHTML = 'Saturn';
        document.getElementById('text8').innerHTML = 'Rahu';
        document.getElementById('text9').innerHTML = 'Ketu';

        document.getElementById('namemm').innerHTML = 'Names';
        
        document.getElementById('icons').innerHTML = 'Icons';
        document.getElementById('chartlagn').innerHTML = '<h1>Lagna Chart</h1>'
        // document.getElementById('text11').style.display = 'Su';
        // document.getElementById('text22').style.display = 'Mo';
        // document.getElementById('text33').style.display = 'Mer';
        // document.getElementById('text44').style.display = 'ven';
        // document.getElementById('text55').style.display = 'Mar';
        // document.getElementById('text66').style.display = 'Jup';
        // document.getElementById('text77').style.display = 'Sat';
        // document.getElementById('text88').style.display = 'Rah';
        // document.getElementById('text99').style.display = 'Ket';
 

        document.getElementById('o1').innerHTML=  'Open this select menu' 
        document.getElementById('o2').innerHTML = 'Aries' 
        document.getElementById('o3').innerHTML = 'Taurus'
        document.getElementById('o4').innerHTML = 'Gemini'
        document.getElementById('o5').innerHTML = 'Cancer'
        document.getElementById('o6').innerHTML = 'Leo'
        document.getElementById('o7').innerHTML = 'Virgo'
        document.getElementById('o8').innerHTML = 'Libra'
        document.getElementById('o9').innerHTML = 'Scorpio'
        document.getElementById('o10').innerHTML = 'Sagittarius'
        document.getElementById('o11').innerHTML = 'Capricorn'
        document.getElementById('o12').innerHTML = 'Aquarius'
        document.getElementById('o13').innerHTML = 'Pisces'


        document.getElementById('fullname').innerHTML= 'Full Name '
        document.getElementById('mail').innerHTML= 'E-mail ID'
        document.getElementById('ph').innerHTML=  'Phone No'

        document.getElementById('fullname1').innerHTML= 'Full Name '
        document.getElementById('mail2').innerHTML= 'E-mail ID'
        document.getElementById('ph3').innerHTML=  'Phone No'


        document.getElementById('cllear').innerHTML ='Reset'
        document.getElementById('namemm').innerHTML= 'Names'
        document.getElementById('icons').innerHTML= ' Icon'
        // document.getElementById('dub').innerHTML= 'Dubalicate'
        // document.getElementById('swcl').style.marginLeft = '2cm'

        document.getElementById('sel1').innerHTML= 'Select'
        document.getElementById('border').innerHTML= 'Border Color'
        document.getElementById('box').innerHTML= 'Box Color '

        document.getElementById('colorbox').innerHTML ='Color'
        document.getElementById('penbox').innerHTML = 'Pen'
        document.getElementById('arrowbox').innerHTML = 'Arrow'


    document.getElementById('exampleModalLabel').innerHTML=  'User Information'
        
}




document.getElementById('flexSwitchCheckDefault').addEventListener('change', function() {
    if (this.checked) {

        document.getElementById('text11').style.display = 'none'
        document.getElementById('text22').style.display = 'none'
        document.getElementById('text33').style.display = 'none'
        document.getElementById('text44').style.display = 'none'
        document.getElementById('text55').style.display = 'none'
        document.getElementById('text66').style.display = 'none'
        document.getElementById('text77').style.display = 'none'
        document.getElementById('text88').style.display = 'none'
        document.getElementById('text99').style.display = 'none'


        
        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text3').style.display = 'block'
        document.getElementById('text4').style.display = 'block'
        document.getElementById('text5').style.display = 'block'
        document.getElementById('text6').style.display = 'block'
        document.getElementById('text7').style.display = 'block'
        document.getElementById('text8').style.display = 'block'
        document.getElementById('text9').style.display = 'block'

                
    }else{

        document.getElementById('text11').style.display = 'block'
         document.getElementById('text22').style.display = 'block'
          document.getElementById('text33').style.display = 'block'
           document.getElementById('text44').style.display = 'block'
            document.getElementById('text55').style.display = 'block'
             document.getElementById('text66').style.display = 'block'
              document.getElementById('text77').style.display = 'block'
               document.getElementById('text88').style.display = 'block'
                document.getElementById('text99').style.display = 'block'


                document.getElementById('text1').style.display = 'none'
                document.getElementById('text2').style.display = 'none'
                document.getElementById('text3').style.display = 'none'
                document.getElementById('text4').style.display = 'none'
                document.getElementById('text5').style.display = 'none'
                document.getElementById('text6').style.display = 'none'
                document.getElementById('text7').style.display = 'none'
                document.getElementById('text8').style.display = 'none'
                document.getElementById('text9').style.display = 'none'
        
    }

});