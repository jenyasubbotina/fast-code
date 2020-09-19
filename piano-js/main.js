function play()
{
	var tile = event.srcElement.id;
	var audio = new Audio('sounds/' + tile + '.wav');
	audio.play();
}