function LANG(lang){
    // input2(lang);
    // alert(lang)
    // 'रीसेट',
    const  l1 = ['सूरज','चंद्रमा','बुध','शुक्र','मंगल','बृहस्पति','शनि','राहु','केतु','रीसेट','नाम','आइकन','डुबालिकेट','चुनना','सीमा रंग','बॉक्स रंग'
        ,'मेनू चुनें','एआरआईएस','वृषभ','मिथुन','कैंसर','सिंह','कन्या','तुल','वृश्चिक','धनुराशि','मकर','कुम्भ','मीन राशि','पूरा नाम','ईमेल आईडी','फोन नंबर'
    ];

    // alert(val)
    switch(lang){
        case 'Hin':
            // alert(l1[0])

            document.getElementById('text11').innerHTML = 'सू';
            document.getElementById('text22').innerHTML = 'चंद्र';
            document.getElementById('text33').innerHTML = 'बु';
            document.getElementById('text44').innerHTML = 'शु';
            document.getElementById('text55').innerHTML = 'मं';
            document.getElementById('text66').innerHTML = 'बृह';
            document.getElementById('text77').innerHTML = 'श';
            document.getElementById('text88').innerHTML = 'रा';
            document.getElementById('onButton').innerHTML = 'तीर'
            document.getElementById('text99').innerHTML = 'के';
            arr(l1);
            break;
        case 'Eng':


        document.getElementById('text11').innerHTML = ' <div id="text1" > Su </div>';
        document.getElementById('text22').innerHTML = ' <div id="text1" > Mo </div>';
        document.getElementById('text33').innerHTML = ' <div id="text1" > Me </div>';
        document.getElementById('text44').innerHTML = ' <div id="text1" > ve </div>';
        document.getElementById('text55').innerHTML = ' <div id="text1" > Ma </div>';
        document.getElementById('text66').innerHTML = ' <div id="text1" > Ju </div>';
        document.getElementById('text77').innerHTML = ' <div id="text1" > Sa </div>';
        document.getElementById('text88').innerHTML = ' <div id="text1" > Ra </div>';
        document.getElementById('text99').innerHTML = ' <div id="text1" > Ke </div>';
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

    
    document.getElementById('remove').innerHTML=l1[9]
    document.getElementById('namemm').innerHTML=l1[10]
    document.getElementById('icons').innerHTML=l1[11]
    // document.getElementById('dub').innerHTML=l1[12]

    document.getElementById('chartlagn').innerHTML = 'लग्न चार्ट'


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



    document.getElementById('swcl').style.marginLeft = '2cm'
}

function eng(){
        document.getElementById('text1').innerHTML = ' <div id="text1" > Sun </div>';
        document.getElementById('text2').innerHTML = ' <div id="text1" > Moon </div>';
        document.getElementById('text3').innerHTML = ' <div id="text1" > Mercury </div>';
        document.getElementById('text4').innerHTML = ' <div id="text1" > venus </div>';
        document.getElementById('text5').innerHTML = ' <div id="text1" > Mars </div>';
        document.getElementById('text6').innerHTML = ' <div id="text1" > Jupiter </div>';
        document.getElementById('text7').innerHTML = ' <div id="text1" > Saturn </div>';
        document.getElementById('text8').innerHTML = ' <div id="text1" > Rahu </div>';
        document.getElementById('text9').innerHTML = ' <div id="text1" > Ketu </div>';

        document.getElementById('namemm').innerHTML = 'Names';
        
        document.getElementById('icons').innerHTML = 'Icons';
        document.getElementById('chartlagn').innerHTML = '<h1>Lagna Chart</h1>'
      

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

        document.getElementById('remove').innerHTML='Reset'

         document.getElementById('penbox').innerHTML='Pen'
          document.getElementById('colorbox').innerHTML='Color'
          document.getElementById('onButton').innerHTML ='Arrow'


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




document.getElementById('iconss').addEventListener('change', function() {
    if (this.checked) {
        

        // <style>  #tex{position: relative;top: 0.7cm;}</style>

        // document.getElementById('tex').innerHTML = "<style>#tex{background-color: rgb(255, 255, 255); width: 1.1cm;}</style>"

        document.getElementById('pl').innerHTML = "<style>#pl{display: none;}</style>"

            document.getElementById('pall1').style.display = 'block'
                        document.getElementById('pall1').style.display = 'block'
                        document.getElementById('pall2').style.display = 'block'
                        document.getElementById('pall3').style.display = 'block'
                        document.getElementById('pall4').style.display = 'block'
                        document.getElementById('pall5').style.display = 'block'
                        document.getElementById('pall6').style.display = 'block'
                        document.getElementById('pall7').style.display = 'block'
                        document.getElementById('pall8').style.display = 'block'
                        document.getElementById('pall9').style.display = 'block'


        // document.getElementById('text1').innerHTML = "<style> #tex{position: relative;top: 0.7cm;}</style>"
    }else{

        document.getElementById('pl').innerHTML = "<style>#pl{display: block;}</style>"
        
            // document.getElementById('pall1').style.display = 'none'


            document.getElementById('pall1').style.display = 'none'
            document.getElementById('pall2').style.display = 'none'
            document.getElementById('pall3').style.display = 'none'
            document.getElementById('pall4').style.display = 'none'
            document.getElementById('pall5').style.display = 'none'
            document.getElementById('pall6').style.display = 'none'
            document.getElementById('pall7').style.display = 'none'
            document.getElementById('pall8').style.display = 'none'
            document.getElementById('pall9').style.display = 'none'
        //  document.getElementById('tex').innerHTML = "<style> #tex{position: relative;top: 0cm;}</style>"
        // document.getElementById('tex').innerHTML = "<style>#tex{background-color: rgb(255, 255, 255); width: 1.1cm;}</style>"

    }
});
