function checkloveper(){
	var name = document.getElementById('name').value;
	var lname = document.getElementById('lname').value;
	if (name == "" ){
					alert('Please write your Name');
					}	
		else if (name.length < 2) {
					alert('Please enter more than two letters');
					}
		else if (!isNaN(name)){
					alert('It Should be a Name');
					} 



		else if (lname == "" ){
					alert('Please write love Name');
					}	
		else if (name.length < 2) {
					alert('Please enter more than two letters');
					}
		else if (!isNaN(name)){
					alert('It Should be a Name');
					} 
		else {
			var lovedata = Math.random() * 100;
			lovedata = Math.floor(lovedata);
			document.getElementById('lovevalue').value = lovedata + "%";
									
								}						
					
	
}