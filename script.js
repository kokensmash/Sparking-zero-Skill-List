// Character data
const characters = [
  
 //Gohan's


   { 
    name: "GOHAN (ADULT) [BASE]", 
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Gut Punch"], 
    stepIn: "Gut Punch", 
    skills: ["Wild Sense", "Full Power"]
},
{ 
    name: "GOHAN (ADULT) [SSJ]", 
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Gut Punch"], 
    stepIn: "Gut Punch", 
    skills: ["Explosive Wave", "Full Power"]
},
{ 
    name: "GOHAN (ADULT) [SSJ2]", 
    rushChains: ["Flying Kicks", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"], 
    stepIn: "Gut Punch", 
    skills: ["Explosive Wave", "Instant Spark"]
},
{ 
    name: "GOHAN (KID)",  
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],  
    stepIn: "Flying Kicks", 
    skills: ["Instant Spark", "Afterimage Strike"]
}, 
{ 
    name: "GOHAN (TEEN) [BASE]",  
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],  
    stepIn: "Flying Kicks", 
    skills: ["Wild Sense", "Full Power"]
}, 
{ 
    name: "GOHAN (TEEN) [SSJ]",  
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],  
    stepIn: "Flying Kicks", 
    skills: ["Explosive Wave", "Instant Spark"]
}, 
{ 
    name: "GOHAN (TEEN) [SSJ2]",  
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Gut Punch", "Heavy Crush"],  
    stepIn: "Gut Punch", 
    skills: ["Wild Sense", "Instant Spark"]
}, 
{ 
    name: "GOHAN (ADULT) [ULTIMATE]",  
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rolling Hammer", "Gut Punch"],  
    stepIn: "Gut Punch", 
    skills: ["Wild Sense", "Full Power"]
}, 
{ 
    name: "GOHAN (FUTURE) [BASE]",  
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Flying Kicks"],  
    stepIn: "Rolling Hammer", 
    skills: ["Explosive Wave", "Instant Spark"]
}, 
{ 
    name: "GOHAN (FUTURE) [SSJ]",  
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Rush Ki Wave"],  
    stepIn: "Rush Ki Wave", 
    skills: ["Explosive Wave", "Instant Spark"]
}, 
{ 
    name: "GREAT SAIYAMAN",  
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Cannon"],  
    stepIn: "Gut Punch", 
    skills: ["Buff", "Buff"]
},

    //Goku's
  {
    name: "GOKU (TEEN)",
    rushChains: ["Flying Kicks", "Flying Kicks", "Gut Punch", "Flying Kicks"],
    stepIn: "Gut Punch",
    skills: ["Afterimage Strike", "Buff"]
},
{
    name: "GOKU (Z - EARLY)",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Solar Flare", "Buff"]
},
{
    name: "GOKU (Z - MID) [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Buff"]
},
{
    name: "GOKU (Z - MID) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Cannon"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "GOKU (Z - END) [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Instant Transmission", "Wild Sense"]
},
{
    name: "GOKU (Z - END) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Cannon"],
    stepIn: "Ki Blast Canon",
    skills: ["Wild Sense", "Buff"]
},
{
    name: "GOKU (Z - END) [SSJ2]",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Rolling Hammer", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Instant Transmission", "Instant Spark"]
},
{
    name: "GOKU (Z - END) [SSJ3]",
    rushChains: ["Ki Blast Cannon", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    stepIn: "Gut Punch",
    skills: ["Instant Transmission", "Instant Spark"]
},
{
    name: "GOKU (GT) [BASE]",
    rushChains: ["Flying Kicks", "Blaster Wave", "Gut Punch", "Flying Kicks"],
    stepIn: "Ki Blast Canon",
    skills: ["Solar Flare", "Afterimage Strike"]
},
{
    name: "GOKU (GT) [SSJ]",
    rushChains: ["Flying Kicks", "Blaster Wave", "Gut Punch", "Flying Kicks"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "GOKU (GT) [SSJ3]",
    rushChains: ["Rolling Hammer", "Blaster Wave", "Gut Punch", "Flying Kicks"],
    stepIn: "Rolling Hammer",
    skills: ["Buff", "Buff"]
},
{
    name: "GOKU (GT) [SSJ4]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Cannon"],
    stepIn: "Flying Kicks",
    skills: ["Instant Transmission", "Buff"]
},
{
    name: "GOKU (SUPER) [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kicks", "Gut Punch"],
    stepIn: "Flying Kicks",
    skills: ["Instant Transmission", "Instant Spark"]
},
{
    name: "GOKU (SUPER) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Cannon"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Buff"]
},
{
    name: "GOKU (SUPER) [SSJ GOD]",
    rushChains: ["Ki Blast Cannon", "Flying Kicks", "Rolling Hammer", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Paralysis", "Buff"]
},
{
    name: "GOKU (SUPER) [SSJ GOD SS BLUE]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Cannon"],
    stepIn: "Ki Blast Canon",
    skills: ["Instant Transmission", "Buff"]
},
{
    name: "GOKU (SUPER) UI -SIGN-",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kick", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Instant Spark"]
},
{
    name: "GOKU (SUPER MASTERED UI)",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Cannon"],
    stepIn: "Rush Ki Wave",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "GOKU (MINI)",
    rushChains: ["Flying Kicks", "Gut Punch", "Gut Punch", "Flying Kicks"],
    stepIn: "Rolling Hammer",
    skills: ["Regeneration", "Buff"]
},
{
    name: "GOKU BLACK [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Buff"]
},
{
    name: "GOKU BLACK [SSJ ROSÉ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Rush Ki Wave"],
    stepIn: "Gut Punch",
    skills: ["Instant Transmission", "Instant Spark"]
},
{
    name: "BARDOCK",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Rolling Hammer", "Flying Kicks"],
    stepIn: "Gut Punch",
    skills: ["Instant Spark", "Buff"]
},
{
    name: "TURLES",
    rushChains: ["Gut Punch", "Blaster Wave", "Gut Punch", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "GOTEN (BASE)",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],
    stepIn: "Ki Blast Canon",
    skills: ["Afterimage", "Regeneration"]
},
{
    name: "GOTEN (SSJ)",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Buff"]
},

    // Vegeta's
   {
    name: "VEGETA (SCOUTER)",
    rushChains: ["Gut Punch", "Flying Kicks", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGETA (Z - EARLY) [BASE]",
    rushChains: ["Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "VEGETA (Z - EARLY) [SSJ]",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Flying Kicks", "Rush Ki Wave"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGETA (Z - EARLY) [Super Vegeta]",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "VEGETA (Z - END) [BASE]",
    rushChains: ["Gut Punch", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Afterimage", "Buff"]
},
{
    name: "VEGETA (Z - END) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Ki Blast Cannon"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGETA (Z - END) [SSJ2]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Wild Sense"]
},
{
    name: "VEGETA (Z - END) [MAJIN]",
    rushChains: ["Gut Punch", "Gut Punch", "Ki Blast Cannon", "Rush Ki Wave"],
    stepIn: "Rush Ki Wave",
    skills: ["Buff", "Instant Spark"]
},
{
    name: "VEGETA (GT) [SSJ4]",
    rushChains: ["Rush Ki Wave", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGETA (SUPER) [BASE]",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Flying Kicks", "Rush Ki Wave"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "VEGETA (SUPER) [SSJ]",
    rushChains: ["Gut Punch", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Instant Spark"]
},
{
    name: "VEGETA (SUPER) [SSJ GOD]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Ki Blast Cannon"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGETA (SUPER) [SSJ GOD SS BLUE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Buff"]
},
{
    name: "CABBA [BASE]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Gut Punch", "Ki Blast Cannon"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "CABBA [SSJ]",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Wild Sense"]
},
{
    name: "CABBA [SSJ2]",
    rushChains: ["Gut Punch", "Ki Blast Cannon", "Rush Ki Wave", "Flying Kicks"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BABY VEGETA (GT)",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "SUPER BABY 1 (GT)",
    rushChains: ["Flying Kicks", "Rush Ki Wave", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Afterimage", "Buff"]
},
{
    name: "SUPER BABY 2 (GT)",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Rush Ki Wave"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Instant Spark"]
},

//Gogeta/vegitos

{
    name: "VEGITO [BASE]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "VEGITO [SSJ]",
    rushChains: ["Rush Ki Wave", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Afterimage Strike", "Buff"]
},
{
    name: "VEGITO [SSJ GOD SS]",
    rushChains: ["Rush Ki Wave", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Full Power"]
},
{
    name: "SUPER GOGETA [Z]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Rolling Hammer"],
    stepIn: "Rolling Hammer",
    skills: ["Buff", "Buff"]
},
{
    name: "GOGETA (GT) [SSJ4]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Cannon", "Rolling Hammer"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "GOGETA (SUPER) [BASE]",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Rolling Hammer", "Flying Kicks"],
    stepIn: "Ki Blast Canon",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "GOGETA (SUPER) [SSJ]",
    rushChains: ["Gut Punch", "Blaster Wave", "Rolling Hammer", "Flying Kicks"],
    stepIn: "Rolling Hammer",
    skills: ["Instant Transmission", "Buff"]
},
{
    name: "GOGETA (SUPER) [SSJ GOD SS]",
    rushChains: ["Blaster Wave", "Gut Punch", "Rolling Hammer", "Flying Kicks"],
    stepIn: "Rolling Hammer",
    skills: ["Instant Transmission", "Explosive Wave"]
},

	//Movies
// Z Movie Villains
{
    name: "SUPER GARLIC JR.",
    rushChains: ["Gut Punch", "Rolling Hammer", "Rolling Hammer", "Ki Blast Canon"],
    stepIn: "Rolling Hammer",
    skills: ["Paralysis", "Buff"]
},
{
    name: "DR. WHEELO",
    rushChains: ["Gut Punch", "Blaster Wave", "Rolling Hammer", ""],
    stepIn: "",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "LORD SLUG",
    rushChains: ["Gut Punch", "Gut Punch", "Blaster Wave", "Rolling Hammer"],
    stepIn: "Rolling Hammer",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "LORD SLUG (GIANT FORM)",
    rushChains: ["Gut Punch", "Gut Punch", "Blaster Wave", ""],
    stepIn: "",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "COOLER [BASE]",
    rushChains: ["Rolling Hammer", "Gut Punch", "Flying Kicks", "Rush Ki Wave"],
    stepIn: "Rush Ki Wave",
    skills: ["Paralysis", "Afterimage"]
},
{
    name: "COOLER [FINAL FORM]",
    rushChains: ["Flying Kicks", "Gut Punch", "Flying Kicks", "Rush Ki Wave"],
    stepIn: "Rush Ki Wave",
    skills: ["Paralysis", "Explosive Wave"]
},
{
    name: "COOLER [METAL]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Rush Ki Wave", "Rolling Hammer"],
    stepIn: "Rush Ki Wave",
    skills: ["Instant Transmission", "Regeneration"]
},
{
    name: "ANDROID 13",
    rushChains: ["Gut Punch", "Gut Punch", "Flying Kicks", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Buff"]
},
{
    name: "ANDROID 13 [FUSED]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Rolling Hammer", "Gut Punch"],
    stepIn: "Rolling Hammer",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "BROLY (Z) [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Ki Blast Canon",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BROLY (Z) [SSJ]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Rush Ki Wave"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BROLY (Z) [LSSJ]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Rush Ki Wave"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BOJACK [BASE]",
    rushChains: ["Gut Punch", "Gut Punch", "Rolling Hammer", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "BOJACK [FULL POWER]",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Gut Punch", "Gut Punch"],
    stepIn: "Rolling Hammer",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "JANEMBA",
    rushChains: ["Rolling Hammer", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"],
    stepIn: "",
    skills: ["Mystic Breath", "Instant Spark"]
},
{
    name: "JANEMBA [SWORD]",
    rushChains: ["Rolling Hammer", "Flying Kicks", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Rush Ki Wave",
    skills: ["Explosive Wave", "Dodge"]
},
{
    name: "HIRUDEGARN",
    rushChains: ["Rolling Hammer", "Blaster Wave", "Gut Punch", ""],
    stepIn: "",
    skills: ["Explosive Wave", "Afterimage"]
},
{
    name: "TAPION",
    rushChains: ["Gut Punch", "Flying Kicks", "Ki Blast Canon", "Rolling Hammer"],
    stepIn: "Ki Blast Canon",
    skills: ["Explosive Wave", "Afterimage"]
},





// Super Villains

{
    name: "FRIEZA (SUPER) [BASE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Rolling Hammer"],
    stepIn: "Gut Punch",
    skills: ["Paralysis", "Buff"]
},
{
    name: "FRIEZA (SUPER) [GOLDEN]",
    rushChains: ["Blaster Wave", "Flying Kicks", "Rolling Hammer", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "ZAMASU",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Canon"],
    stepIn: "Gut Punch",
    skills: ["Regen", "Buff"]
},
{
    name: "FUSED ZAMASU [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Flying Kicks", "Rolling Hammer"],
    stepIn: "Ki Blast Canon",
    skills: ["Regen", "Instant Spark"]
},
{
    name: "FUSED ZAMASU [HALF-CORRUPTED]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Canon"],
    stepIn: "Rolling Hammer",
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BROLY (SUPER) [BASE]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Rush Ki Wave", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Full Power", "Instant Spark"]
},
{
    name: "BROLY (SUPER) [SSJ]",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Rolling Hammer", "Gut Punch"],
    stepIn: "Gut Punch",
    skills: ["Buff", "Instant Spark"]
},
{
    name: "BROLY (SUPER) [LSSJ]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Rolling Hammer"],
    stepIn: "Rolling Hammer",
    skills: ["Instant Transmission", "Instant Spark"]
},


//trunks+Gotenks

{
    name: "TRUNKS (KID) [BASE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Gut Punch"],
    skills: ["Afterimage", "Buff"]
},
{
    name: "TRUNKS (KID) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "TRUNKS (MELEE) [BASE]",
    rushChains: ["Gut Punch", "Blaster Wave", "Gut Punch", "Flying Kicks"],
    skills: ["Explosive Wave", "Wild Sense"]
},
{
    name: "TRUNKS (MELEE) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Blaster Wave", "Gut Punch"],
    skills: ["Solar Flare", "Wild Sense"]
},
{
    name: "TRUNKS (MELEE) [Super Trunks]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "TRUNKS (SWORD) [BASE]",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Gut Punch", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "TRUNKS (SWORD) [SSJ]",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Gut Punch", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "TRUNKS (FUTURE) [BASE]",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Rush Ki Wave", "Gut Punch"],
    skills: ["Afterimage", "Instant Spark"]
},
{
    name: "TRUNKS (FUTURE) [SSJ]",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Rush Ki Wave", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "GOTENKS [BASE]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Afterimage", "Buff"]
},
{
    name: "GOTENKS [SSJ]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Gut Punch", "Flying Kicks"],
    skills: ["Buff", "Buff"]
},
{
    name: "GOTENKS [SSJ3]",
    rushChains: ["Ki Blast Canon", "Gut Punch", "Rush Ki Wave", "Flying Kicks"],
    skills: ["Paralysis", "Buff"]
},

   //z fighters and friends

{
    name: "KRILLIN",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Solar Flare", "Afterimage Strike"]
},
{
    name: "YAMCHA",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Flying Kicks", "Rolling Hammer"],
    skills: ["Afterimage", "Instant Spark"]
},
{
    name: "TIEN",
    rushChains: ["Ki Blast Canon", "Flying Kicks", "Gut Punch", "Gut Punch"],
    skills: ["Solar Flare", "Wild Sense"]
},
{
    name: "CHIAOTZU",
    rushChains: ["Flying Kicks", "Flying Kicks", "Flying Kicks", "Gut Punch"],
    skills: ["Paralysis", "Afterimage"]
},
{
    name: "YAJIROBE",
    rushChains: ["Gut Punch", "Gut Punch", "Gut Punch", "Rolling Hammer"],
    skills: ["Instant Spark", "Regeneration"]
},
{
    name: "MASTER ROSHI [BASE]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Afterimage Strike", "Buff"]
},
{
    name: "MASTER ROSHI [MAX POWER]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Gut Punch", "Rolling Hammer"],
    skills: ["Buff", "Buff"]
},
{
    name: "PICCOLO (EARLY)",
    rushChains: ["Ki Blast Canon", "Rush Ki Wave", "Gut Punch", "Flying Kicks"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "PICCOLO (FUSED WITH KAMI)",
    rushChains: ["Ki Blast Canon", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    skills: ["Wild Sense", "Buff"]
},
{
    name: "NAIL",
    rushChains: ["Ki Blast Canon", "Flying Kicks", "Gut Punch", "Rush Ki Wave"],
    skills: ["Buff", "Instant Spark"]
},
{
    name: "BEERUS",
    rushChains: ["Ki Blast Cannon", "Rolling Hammer", "Gut Punch", "Flying Kicks"],
    skills: ["Regeneration", "Instant Spark"]
},
{
    name: "WHIS",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Flying Kicks"],
    skills: ["Explosive Wave", "Regeneration"]
},
{
    name: "VIDEL",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Ki Blast Cannon", "Gut Punch"],
    skills: ["Afterimage Strike", "Instant Spark"]
},

      //Other Universes
{
    name: "RIBRIANNE",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Rolling Hammer", "Rolling Hammer"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "KAKUNSA",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rolling Hammer", "Gut Punch"],
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "ROASIE",
    rushChains: ["Ki Blast Cannon", "Flying Kicks", "Gut Punch", "Ki Blast Cannon"],
    skills: ["Full Power", "Instant Spark"]
},
{
    name: "HIT",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Rolling Hammer", "Gut Punch"],
    skills: ["Afterimage", "Instant Transmission"]
},
{
    name: "FROST",
    rushChains: ["Flying Kicks", "Ki Blast Cannon", "Gut Punch", "Rolling Hammer"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "BERGAMO",
    rushChains: ["Flying Kicks", "Rush Ki Wave", "Gut Punch", "Rolling Hammer"],
    skills: ["Instant Spark", "Buff"]
},
{
    name: "DYPSO",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Cannon", "Gut Punch"],
    skills: ["Buff", "Buff"]
},
{
    name: "TOPPO [BASE]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Cannon"],
    skills: ["Buff", "Instant Spark"]
},
{
    name: "TOPPO [GOD OF DESTRUCTION]",
    rushChains: ["Blaster Wave", "Flying Kicks", "Rolling Hammer", "Gut Punch"],
    skills: ["Buff", "Explosive Wave"]
},
{
    name: "JIREN [BASE]",
    rushChains: ["Ki Blast Cannon", "Gut Punch", "Flying Kicks", "Rolling Hammer"],
    skills: ["Explosive Wave", "Regeneration"]
},
{
    name: "JIREN [FULL POWER]",
    rushChains: ["Blaster Wave", "Gut Punch", "Flying Kicks", "Rolling Hammer"],
    skills: ["Explosive Wave", "Instant Spark"]
},

{
    name: "KALE [BASE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Flying Kicks"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "KALE [SSJ]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Gut Punch"],
    skills: ["Explosive Wave", "Wild Sense"]
},
{
    name: "KALE [SSJ BERSERK]",
    rushChains: ["Ki Blast Canon", "Flying Kicks", "Rolling Hammer", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "CAULIFLA [BASE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Rolling Hammer", "Ki Blast Canon"],
    skills: ["Full Power", "Instant Spark"]
},
{
    name: "CAULIFLA [SSJ2]",
    rushChains: ["Ki Blast Canon", "Gut Punch", "Rolling Hammer", "Flying Kicks"],
    skills: ["Wild Sense", "Buff"]
},
{
    name: "KEFLA [BASE]",
    rushChains: ["Gut Punch", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "KEFLA [SSJ]",
    rushChains: ["Gut Punch", "Flying Kicks", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Buff", "Wild Sense"]
},
{
    name: "KEFLA [SSJ2]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Flying Kicks", "Gut Punch"],
    skills: ["Wild Sense", "Instant Spark"]
},

// Z Villains
{
    name: "RADITZ",
    rushChains: ["Flying Kicks", "Gut Punch", "Blaster Wave", "Rolling Hammer"],
    skills: ["Buff", "Instant Spark"]
},
{
    name: "NAPPA",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Gut Punch"],
    skills: ["Buff", "Buff"]
},
{
    name: "SAIBAMAN",
    rushChains: ["Blaster Wave", "Flying Kicks", "Flying Kicks", "Gut Punch"],
    skills: ["Paralysis", "Afterimage"]
},
{
    name: "VEGETA (GREAT APE)",
    rushChains: ["Blaster Wave", "Flying Kicks", "Flying Kicks", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "FRIEZA FORCE SOLDIER",
    rushChains: ["Gut Punch", "Flying Kicks", "Flying Kicks", "Gut Punch"],
    skills: ["Full Power", "Regeneration"]
},
{
    name: "CUI",
    rushChains: ["Blaster Wave", "Gut Punch", "Gut Punch", "Gut Punch"],
    skills: ["Buff", "Regeneration"]
},
{
    name: "ZARBON [BASE]",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Flying Kicks", "Gut Punch"],
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "ZARBON [MONSTER]",
    rushChains: ["Gut Punch", "Blaster Wave", "Blaster Wave", "Rolling Hammer"],
    skills: ["Buff", "Buff"]
},
{
    name: "DODORIA",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Rolling Hammer", "Gut Punch"],
    skills: ["Buff", "Buff"]
},
{
    name: "GULDO",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Ki Blast Canon"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "BURTER",
    rushChains: ["Gut Punch", "Flying Kicks", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Afterimage", "Instant Spark"]
},
{
    name: "JEICE",
    rushChains: ["Rolling Hammer", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "RECOOME",
    rushChains: ["Blaster Wave", "Flying Kicks", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Instant Spark", "Buff"]
},
{
    name: "GINYU",
    rushChains: ["Gut Punch", "Gut Punch", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Instant Spark", "Buff"]
},
{
    name: "FRIEZA (Z) [1st FORM]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Paralysis", "Buff"]
},
{
    name: "FRIEZA (Z) [2nd FORM]",
    rushChains: ["Gut Punch", "Flying Kicks", "Rolling Hammer", "Blaster Wave"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "FRIEZA (Z) [3rd FORM]",
    rushChains: ["Flying Kicks", "Gut Punch", "Gut Punch", "Flying Kicks"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "FRIEZA (Z) [4th FORM]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Flying Kicks", "Gut Punch"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "FRIEZA (Z) [FULL POWER]",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Gut Punch"],
    skills: ["Paralysis", "Instant Spark"]
},
{
    name: "FRIEZA (Z) [MECHA]",
    rushChains: ["Flying Kicks", "Flying Kicks", "Rolling Hammer", "Gut Punch"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "KING COLD",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Rolling Hammer", "Rolling Hammer"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "BABIDI",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Ki Blast Canon", "Rush Ki Wave"],
    skills: ["Paralysis", "Explosive Wave"]
},
{
    name: "SPOPOVICH",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Rolling Hammer", "Gut Punch"],
    skills: ["Buff", "Buff"]
},
{
    name: "DABURA",
    rushChains: ["Gut Punch", "Rolling Hammer", "Ki Blast Canon", "Rush Ki Wave"],
    skills: ["Mystic Breath", "Afterimage Strike"]
},
{
    name: "EVIL BUU",
    rushChains: ["Gut Punch", "Rolling Hammer", "Rush Ki Wave", "Flying Kicks"],
    skills: ["Paralysis", "Mystic Breath"]
},
{
    name: "MAJIN BUU",
    rushChains: ["Gut Punch", "Rolling Hammer", "Ki Blast Canon", "Gut Punch"],
    skills: ["Paralysis", "Regeneration"]
},
{
    name: "SUPER BUU",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Flying Kicks", "Rolling Hammer"],
    skills: ["Paralysis", "Regeneration"]
},
{
    name: "SUPER BUU (GOTENKS)",
    rushChains: ["Ki Blast Canon", "Ki Blast Canon", "Flying Kicks", "Gut Punch"],
    skills: ["Explosive Wave", "Regeneration"]
},
{
    name: "SUPER BUU (GOHAN)",
    rushChains: ["Gut Punch", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    skills: ["Afterimage", "Buff"]
},
{
    name: "KID BUU",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Instant Transmission", "Regeneration"]
},
{
    name: "UUB (GT)",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Flying Kicks", "Gut Punch"],
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "MAJUUB (GT)",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Gut Punch", "Gut Punch"],
    skills: ["Paralysis", "Mystic Breath"]
},
{
    name: "ANDROID 16",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Rolling Hammer"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "ANDROID 17 (Z)",
    rushChains: ["Gut Punch", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    skills: ["Explosive Wave", "Buff"]
},
{
    name: "ANDROID 17 (SUPER)",
    rushChains: ["Rolling Hammer", "Gut Punch", "Gut Punch", "Flying Kicks"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "ANDROID 18",
    rushChains: ["Gut Punch", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "ANDROID 19",
    rushChains: ["Gut Punch", "Rolling Hammer", "Gut Punch", "Rolling Hammer"],
    skills: ["Buff", "Buff"]
},
{
    name: "DR. GERO",
    rushChains: ["Flying Kicks", "Flying Kicks", "Gut Punch", "Gut Punch"],
    skills: ["Buff", "Buff"]
},
{
    name: "CELL [1st FORM]",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Gut Punch", "Gut Punch"],
    skills: ["Solar Flare", "Afterimage"]
},
{
    name: "CELL [2nd FORM]",
    rushChains: ["Blaster Wave", "Gut Punch", "Blaster Wave", "Rolling Hammer"],
    skills: ["Solar Flare", "Buff"]
},
{
    name: "CELL [PERFECT FORM]",
    rushChains: ["Flying Kicks", "Ki Blast Canon", "Gut Punch", "Gut Punch"],
    skills: ["Explosive Wave", "Afterimage"]
},
{
    name: "PERFECT CELL",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Instant Transmission", "Wild Sense"]
},
{
    name: "CELL JR",
    rushChains: ["Flying Kicks", "Flying Kicks", "Ki Blast Canon", "Gut Punch"],
    skills: ["Solar Flare", "Explosive Wave"]
},

//The rest
{
    name: "PAN (GT)",
    rushChains: ["Flying Kicks", "Gut Punch", "Flying Kicks", "Flying Kicks"],
    skills: ["Afterimage Strike", "Buff"]
},
{
    name: "GREAT APE BABY (GT)",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Gut Punch", ""],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "SYN SHENRON (GT)",
    rushChains: ["Gut Punch", "Blaster Wave", "Rush Ki Wave", "Gut Punch"],
    skills: ["Explosive Wave", "Mystic Breath"]
},
{
    name: "OMEGA SHENRON (GT)",
    rushChains: ["Gut Punch", "Rolling Hammer", "Blaster Wave", "Rush Ki Wave"],
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "ANILAZA",
    rushChains: ["Rolling Hammer", "Ki Blast Canon", "Gut Punch", ""],
    skills: ["Afterimage", "Instant Spark"]
},

//DLC

{
    name: "GOHAN (SUPER HERO) [BASE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Gut Punch"],
    skills: ["Afterimage", "Full Power"]
},
{
    name: "GOHAN (SUPER HERO) [SSJ]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Gut Punch"],
    skills: ["Explosive Wave", "Full Power"]
},
{
    name: "GOHAN (SUPER HERO) [ULTIMATE]",
    rushChains: ["Flying Kicks", "Gut Punch", "Ki Blast Canon", "Rolling Hammer"],
    skills: ["Wild Sense", "Buff"]
},
{
    name: "GOHAN (SUPER HERO) [BEAST]",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Ki Blast Canon", "Gut Punch"],
    skills: ["Wild Sense", "Instant Spark"]
},
{
    name: "PICCOLO (SUPER HERO)",
    rushChains: ["Ki Blast Canon", "Flying Kicks", "Gut Punch", "Rolling Hammer"],
    skills: ["Wild Sense", "Buff"]
},
{
    name: "PICCOLO (SUPER HERO) [POWER AWAKENING]",
    rushChains: ["Gut Punch", "Ki Blast Canon", "Gut Punch", "Rolling Hammer"],
    skills: ["Wild Sense", "Buff"]
},
{
    name: "PICCOLO (SUPER HERO) [ORANGE]",
    rushChains: ["Gut Punch", "Blaster Wave", "Rolling Hammer", "Ki Blast Canon"],
    skills: ["Buff", "Instant Spark"]
},
{
    name: "PICCOLO (SUPER HERO) [GIANT ORANGE]",
    rushChains: ["Rolling Hammer", "Blaster Wave", "Gut Punch", ""],
    skills: ["Explosive Wave", "Instant Spark"]
},
{
    name: "GAMMA 1",
    rushChains: ["Flying Kicks", "Rolling Hammer", "Gut Punch", "Ki Blast Canon"],
    skills: ["Buff", "Explosive Wave"]
},
{
    name: "GAMMA 2",
    rushChains: ["Blaster Wave", "Gut Punch", "Rolling Hammer", "Flying Kicks"],
    skills: ["Buff", "Explosive Wave"]
},
{
    name: "CELL MAX",
    rushChains: ["Blaster Wave", "Rolling Hammer", "Gut Punch", ""],
    skills: ["Explosive Wave", "Instant Spark"]
}





]; 

// Variables for pagination
let itemsPerPage = 20; // Default items per page
let currentPage = 1; // Current page number
let sortColumnIndex = null; // Track the column being sorted
let sortAscending = true; // Track the sorting order

// Function to normalize strings for case-insensitive comparison
function normalizeString(str) {
    return str.trim().toLowerCase();
}

// Function to dynamically add OR options
function addOrOption(id) {
    const group = document.getElementById(`${id}-or-group`);
    const select = document.createElement("select");
    select.innerHTML = document.getElementById(id).innerHTML;
    group.appendChild(select);
}

// Function to reset all filters
function resetFilters() {
    document.querySelectorAll("select").forEach(select => (select.value = ""));
    document.querySelectorAll(".or-group").forEach(group => (group.innerHTML = ""));
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => (checkbox.checked = false));
    document.getElementById("searchBar").value = "";
    toggleDropdowns(); // Re-enable dropdowns
    displayCharacters();
}

// Function to disable/enable dropdowns
function toggleDropdowns() {
    const hasActiveCheckbox = document.querySelectorAll(".rush-filter:checked").length > 0;
    document.querySelectorAll("select").forEach(select => (select.disabled = hasActiveCheckbox));
    document.querySelectorAll(".or-button").forEach(button => (button.disabled = hasActiveCheckbox));
}

//Main function to Display Characters
function displayCharacters() {
    const characterList = document.getElementById("characterList");
    characterList.innerHTML = "";

    // Get search query and selected filters
    const searchQuery = normalizeString(document.getElementById("searchBar").value);
    const selectedCheckboxes = Array.from(document.querySelectorAll(".rush-filter:checked")).map(cb => normalizeString(cb.value));

    const filters = {
        rush1: [normalizeString(document.getElementById("rush1").value)],
        rush2: [normalizeString(document.getElementById("rush2").value)],
        rush3: [normalizeString(document.getElementById("rush3").value)],
        rush4: [normalizeString(document.getElementById("rush4").value)],
        stepIn: [normalizeString(document.getElementById("stepIn").value)], // Step-In filter
        skill1: [normalizeString(document.getElementById("skill1").value)],
        skill2: [normalizeString(document.getElementById("skill2").value)],
    };

    // Add OR options to filters
    document.querySelectorAll("#rush1-or-group select").forEach(select => filters.rush1.push(normalizeString(select.value)));
    document.querySelectorAll("#rush2-or-group select").forEach(select => filters.rush2.push(normalizeString(select.value)));
    document.querySelectorAll("#rush3-or-group select").forEach(select => filters.rush3.push(normalizeString(select.value)));
    document.querySelectorAll("#rush4-or-group select").forEach(select => filters.rush4.push(normalizeString(select.value)));
    document.querySelectorAll("#stepIn-or-group select").forEach(select => filters.stepIn.push(normalizeString(select.value))); // Step-In OR options
    document.querySelectorAll("#skill1-or-group select").forEach(select => filters.skill1.push(normalizeString(select.value)));
    document.querySelectorAll("#skill2-or-group select").forEach(select => filters.skill2.push(normalizeString(select.value)));

    // Filter characters
    const filteredCharacters = characters.filter(character => {
        const nameMatch = !searchQuery || normalizeString(character.name).includes(searchQuery);

        const hasMatchingCheckbox =
            selectedCheckboxes.length === 0 ||
            selectedCheckboxes.every(cb => character.rushChains.map(normalizeString).includes(cb));

        const rush1Match = filters.rush1.includes("") || filters.rush1.includes(normalizeString(character.rushChains[0]));
        const rush2Match = filters.rush2.includes("") || filters.rush2.includes(normalizeString(character.rushChains[1]));
        const rush3Match = filters.rush3.includes("") || filters.rush3.includes(normalizeString(character.rushChains[2]));
        const rush4Match = filters.rush4.includes("") || filters.rush4.includes(normalizeString(character.rushChains[3]));

        const stepInMatch = filters.stepIn.includes("") || 
                    filters.stepIn.some(filter => filter === normalizeString(character.stepIn || ""));
 // Step-In Match

        const skillFilters = [...filters.skill1, ...filters.skill2].filter(skill => skill !== "");
        const skillsMatch =
            skillFilters.length === 0 ||
            skillFilters.every(skill => character.skills.map(normalizeString).includes(skill));

        return nameMatch && hasMatchingCheckbox && rush1Match && rush2Match && rush3Match && rush4Match && stepInMatch && skillsMatch;
    });

    // Sorting logic if any column is selected
    if (sortColumnIndex !== null) {
        filteredCharacters.sort((a, b) => {
            const valueA = a.rushChains[sortColumnIndex - 1]?.toLowerCase() || a.name.toLowerCase();
            const valueB = b.rushChains[sortColumnIndex - 1]?.toLowerCase() || b.name.toLowerCase();
            if (valueA < valueB) return sortAscending ? -1 : 1;
            if (valueA > valueB) return sortAscending ? 1 : -1;
            return 0;
        });
    }

    // Pagination and rendering logic
    const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
    currentPage = Math.min(currentPage, totalPages || 1);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const charactersToDisplay = filteredCharacters.slice(start, end);

    if (charactersToDisplay.length > 0) {
        charactersToDisplay.forEach(character => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${character.name}</td>
                <td>${character.rushChains[0]}</td>
                <td>${character.rushChains[1]}</td>
                <td>${character.rushChains[2]}</td>
                <td>${character.rushChains[3]}</td>
                <td>${character.stepIn}</td>
                <td>${character.skills[0]}</td>
                <td>${character.skills[1]}</td>
            `;
            characterList.appendChild(row);
        });
    } else {
        characterList.innerHTML = `<tr><td colspan="8" style="text-align:center">No characters found.</td></tr>`;
    }

    updatePaginationControls(totalPages);
}

// Function to update pagination controls
function updatePaginationControls(totalPages) {
    const paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = ""; // Clear existing controls

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.className = i === currentPage ? "active" : "";
            button.addEventListener("click", () => {
                currentPage = i;
                displayCharacters();
            });
            paginationControls.appendChild(button);
        }
    }
}

// Sort table function
function sortTable(columnIndex) {
    sortAscending = sortColumnIndex === columnIndex ? !sortAscending : true; // Toggle order or reset
    sortColumnIndex = columnIndex;
    displayCharacters(); // Redisplay characters with sorting
}

// Event listener for items per page
document.getElementById("itemsPerPage").addEventListener("change", e => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1; // Reset to first page
    displayCharacters();
});

// Add event listeners to update the display when filters are changed
document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", displayCharacters);
});

document.querySelectorAll(".rush-filter").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        toggleDropdowns();
        displayCharacters();
    });
});

document.getElementById("searchBar").addEventListener("input", displayCharacters);

// Initial display
displayCharacters();