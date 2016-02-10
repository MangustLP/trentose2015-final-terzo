var scoref = 0;
var phrase1= "";

$(document).ready(function(){

    $(".btn").on("click", function(event){
       
        var temps = document.getElementById("inp").value;
        ParlaModel.detectLanguage(temps);
        
        
                    
    });
    
});

var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   //langs : languages, 
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
      

       var array_parole = phrase1.split(" ");
       alert(array_parole.length);
       var score = 0;
       var i = 0;
       var j = 0;

      if (language == languages[0].name){ 
           
           for (i = 0; i < ita.length;i ++){
              
               
               for (j = 0; j < array_parole.length; j++){
                   
                   if (array_parole[j] == ita[i]) {scoref = scoref+1;}
                   
                   
               }
           }
           
           
       }
       else if (language == languages[1].name){ 
           
           for (i = 0; i < spa.length;i ++){
              
               
               for (j = 0; j < array_parole.length; j++){
                   
                   if (array_parole[j] == spa[i]) {scoref = scoref+1;}
                   
                   
               }
           }
           
        
       else if (language == languages[2].name){ 
           
           for (i = 0; i < eng.length;i ++){
              
               
               for (j = 0; j < array_parole.length; j++){
                   
                   if (array_parole[j] == eng[i]) {scoref = scoref+1;}
                   
                   
               }
           }
        
        
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
       phrase1 = phrase;
       ParlaModel.getLanguageScore(phrase1,"English");
       alert(scoref);
       
       
   }
         
};
