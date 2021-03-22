var expcted_CtcPercent_res;
var expcted_CtcAmount_res;
var fieldData = {},
currentctcAmount,
expctdctcAmount,
expctdctcPercent;
$('#div_main div input').blur(function(){
var value_res = $('#div_main').find('input')
 value_res.each(function(x,y){
    fieldData[y.id] = y.value;  
 })
//console.log(fieldData)
   currentctcAmount = parseInt(fieldData.currentCtc);
   expctdctcAmount = parseInt(fieldData.expectedCtcAmnt);
   expctdctcPercent = parseInt(fieldData.expectedCtcPerc);
 if(fieldData.currentCtc !== ''){
    $("#expectedCtcPerc").prop("readonly", false);
    $("#expectedCtcAmnt").prop("readonly", false);
    if(fieldData.expectedCtcAmnt !== '' && fieldData.expectedCtcAmnt !== undefined){
        $("#expectedCtcPerc").prop("readonly", true);
        console.log("Amount if")
       var expcted_hikeAmount  =  expctdctcAmount - currentctcAmount;
        expcted_CtcPercent_res = ((expcted_hikeAmount*100))/currentctcAmount;
        $('input[name="ExpectedCTCPerc"]').val(expcted_CtcPercent_res);
    }
    if(fieldData.expectedCtcPerc !== '' && fieldData.expectedCtcPerc !== undefined){
        $("#expectedCtcAmnt").prop("readonly", true);
        // $("#ok_amount").hide()
        var expctdctcPercent_decmal= expctdctcPercent/100;
        var expcted_hikeInAmount  =  currentctcAmount* expctdctcPercent_decmal;
         expcted_CtcAmount_res = currentctcAmount + expcted_hikeInAmount;
        $('input[name="ExpectedCTCAmt"]').val(expcted_CtcAmount_res);
        
    }
} 

 console.log(fieldData)
})
$("#btn_percent").on("click", function(){
    if(fieldData.currentCtc !== ''){
        if(fieldData.expectedCtcAmnt !== '' && fieldData.expectedCtcAmnt !== undefined){
            $("#btn_amount").css("display", "none")
            $('input[name="ExpectedCTCPerc"]').val(expcted_CtcPercent_res);
        } 
    }   
});

$("#btn_amount").on("click", function(){
    if(fieldData.currentCtc !== ''){
        if(fieldData.expectedCtcPerc !== '' && fieldData.expectedCtcPerc !== undefined){
            $("#btn_percent").css("display", "none")
            $('input[name="ExpectedCTCAmt"]').val(expcted_CtcAmount_res);
        } 
    }   
});













