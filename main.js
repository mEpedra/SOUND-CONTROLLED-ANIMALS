function startClasssification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio', modelReady); 
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, result)
{
    if(error)
    {
        console.log(error)
    }
    else{
        console.log(result)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -"+ result[0].label;
        document.getElementById("result_confidence").innerHTML = "accuracy -"+ (result[0].confidence * 100).toFixed(2)+"%";
        img1 = document.getElementById('alien1')
        img2 = document.getElementById('alien2')
        img3 = document.getElementById('alien3')
        img4 = document.getElementById('alien4')
        if (result[0].label == "Click") {
             img1.src ='aliens-01.gif';
             img2.src ='aliens-02.png';
        }
        else if (result[0].label == "Bang"){
            img1.src ='aliens-01.png';
            img2.src ='aliens-02.gif';
        }
    }
}
