name_array=[];
function submit(){
    var display_array=[];
    for(j=1; j<=4; j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        name_array.push(name);
    }
    console.log(name_array);
    var length_array=name_array.length;
    for(k=0; k<length_array; k++){
        display_array.push("<h4>name-" + name_array[k] + "</h4>");

    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_array=display_array.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    var display1_array=[];
    var length1_array=name_array.length;
    for(k=0; k<length1_array; k++){
        display1_array.push("<h4>name-" + name_array[k] + "</h4>");

    }
    console.log(display1_array);
    var remove1_array=display1_array.join("");
    document.getElementById("display_name_without_commas").innerHTML=remove1_array;
}