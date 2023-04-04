function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6l5lSNZWy/model.json', modelReady);
}

function modelReady() 
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Recognising - ' + results[0].label;

        document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("pic");
        console.log(results[0].label);
        if (results[0].label == "Background Noise") 
        {
            img.src = 'listen.gif';
        } 
        else if (results[0].label == "Bark") 
        {
            img.src = 'dog.gif';
            document.getElementById("animal_label").innerHTML = "Animal - Dog";
        } 
        else if (results[0].label == "Meow") 
        {
            img.src = 'meow.gif';
            document.getElementById("animal_label").innerHTML = "Animal - Cat";
        } 
        else if (results[0].label == "Moo")
        {
            img.src = 'cow.gif';
            document.getElementById("animal_label").innerHTML = "Animal - Cow";
        }
        else 
        {
            img.src = 'listen.gif';
            
        }
    }
}