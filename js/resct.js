
function remove() {
    
    // document.getElementById('dropBox9').addEventListener('drop', function(e) {
    //     // e.preventDefault();
    //     // const color = e.dataTransfer.getData('color');
    //     e.target.style.backgroundColor = 'red';
    // });


    document.getElementById('dropBox1').style.backgroundColor = '';
    document.getElementById('dropBox2').style.backgroundColor = '';
    document.getElementById('dropBox3').style.backgroundColor = '';
    document.getElementById('dropBox4').style.backgroundColor = '';
    document.getElementById('dropBox5').style.backgroundColor = '';
    document.getElementById('dropBox6').style.backgroundColor = '';
    document.getElementById('dropBox7').style.backgroundColor = '';
    document.getElementById('dropBox8').style.backgroundColor = '';
    document.getElementById('dropBox9').style.backgroundColor = '';
    document.getElementById('dropBox10').style.backgroundColor = '';
    document.getElementById('dropBox11').style.backgroundColor = '';
    document.getElementById('dropBox12').style.backgroundColor = '';
    document.getElementById('dropBox13').style.backgroundColor = '';
    document.getElementById('dropBox14').style.backgroundColor = '';
    document.getElementById('dropBox15').style.backgroundColor = '';
    document.getElementById('dropBox16').style.backgroundColor = '';
    document.getElementById('dropBox17').style.backgroundColor = '';
    document.getElementById('dropBox18').style.backgroundColor = '';
    document.getElementById('dropBox19').style.backgroundColor = '';
    document.getElementById('dropBox20').style.backgroundColor = '';
    document.getElementById('dropBox21').style.backgroundColor = '';
    document.getElementById('dropBox22').style.backgroundColor = '';
    document.getElementById('dropBox23').style.backgroundColor = '';
    document.getElementById('dropBox24').style.backgroundColor = '';
    
   
    document.getElementById('displayImage2').innerHTML = ""
    document.getElementById('displayImage').innerHTML = ""
    

    
    }




    


    document.getElementById('remove').addEventListener('click', () => {
   
        myUniqueContext.clearRect(0, 0, myUniqueCanvas.width, myUniqueCanvas.height);

        arrows = [];
        arrowContext.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
    });
    