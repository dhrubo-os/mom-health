// ============================================================================
//  MEDICINE GUIDE — benefits, side effects, what happens if missed/stopped
//  Every point comes from an official leaflet (NHS / MedlinePlus), fetched
//  15 Nov 2026. "cmc" = what CMC's discharge summary (5 Jun 2026) says.
//  If a leaflet does not cover something, we say so instead of guessing.
// ============================================================================

window.MEDGUIDE = {
  checked: "2026-11-15",

  // Big-picture points, each taken from the leaflets below
  keyPoints: [
    { tone: "bad", text: "<b>Never stop suddenly:</b> sertraline, duloxetine and pregabalin. All three NHS leaflets say stopping suddenly can cause withdrawal symptoms; the doctor reduces the dose gradually." },
    { tone: "warn", text: "<b>Keep taking unless a doctor says stop:</b> aspirin and atorvastatin. The NHS says that if atorvastatin is stopped, cholesterol may go up again." },
    { tone: "warn", text: "<b>Bleeding:</b> the NHS sertraline and duloxetine leaflets both list aspirin among medicines that 'may not mix well'. CMC's warning signs include bleeding gums or blood in stools." },
    { tone: "warn", text: "<b>Pantoprazole long-term:</b> the NHS says use over 1 year may raise the risk of bone fractures and low vitamin B12. She has osteoporosis, so ask whether she still needs it." },
    { tone: "info", text: "<b>Falls:</b> pregabalin, sertraline and duloxetine can all cause dizziness or drowsiness (NHS). With her spine osteoporosis, a fall matters more." }
  ],

  meds: [
    {
      name: "Aspirin", strength: "75 mg once daily, afternoon", group: "Stroke prevention",
      cmc: "Antiplatelet medicine started for the stroke.",
      benefits: ["Prevents blood clots and lowers the chance of a heart attack or stroke (NHS).", "Usually taken for a long time, sometimes for life (NHS)."],
      common: ["Indigestion and stomach ache", "Bleeding more easily than usual (for example, cuts take longer to stop bleeding)"],
      serious: ["Signs of stomach bleeding: tummy pain, pale skin, vomiting blood, or black, sticky, tar-like poo", "Shortness of breath or wheezing", "Allergic reaction: swollen throat or tongue, itchy raised rash, difficulty breathing (call an ambulance)"],
      missed: "Take it as soon as you remember, unless it's nearly time for the next dose; then skip it. Never take 2 doses to make up (NHS).",
      ifStopped: "NHS: 'keep taking your medicine unless you're advised to stop.' The leaflet does not put a number on the risk of stopping. CMC prescribed it to lower the chance of another stroke.",
      watch: ["NHS lists 'some antidepressants' and painkillers like ibuprofen and naproxen as medicines that may not mix well. Paracetamol is fine with it.", "Limit alcohol (NHS)."],
      sources: [["NHS: low-dose aspirin", "https://www.nhs.uk/medicines/low-dose-aspirin/"]]
    },
    {
      name: "Atorvastatin", strength: "10 mg once daily, night", group: "Stroke prevention",
      cmc: "Statin started for the stroke. Her LDL cholesterol was 162 in April.",
      benefits: ["Lowers cholesterol (NHS).", "Can prevent angina, heart attack and stroke in people with heart or blood-vessel disease (NHS).", "Usually taken long term (NHS)."],
      common: ["Headache", "Dizziness", "Feeling sick", "Constipation, diarrhoea, indigestion or wind", "Muscle aches and swollen joints", "Blocked or runny nose, nosebleeds", "Sleep problems"],
      serious: ["Muscle cramps, severe pain or weakness, sometimes with a high temperature and red or brown pee", "Yellow skin or whites of the eyes (liver problem)", "Severe stomach pain (pancreatitis)", "Allergic reaction"],
      missed: "Skip the missed dose and take the next one at the usual time. Never take 2 doses (NHS).",
      ifStopped: "NHS: 'If you stop taking it, your cholesterol levels may go up again.'",
      watch: ["No more than 1 or 2 small glasses of grapefruit juice a day (NHS).", "Tell the doctor about any antibiotics such as clarithromycin or erythromycin, or antifungals such as fluconazole; the NHS says these may not mix well.", "The NHS leaflet says it isn't suitable after 'a bleed in the brain'. Her stroke was ischaemic (a blocked artery), according to CMC, but confirm with the doctor if unsure."],
      sources: [["NHS: atorvastatin", "https://www.nhs.uk/medicines/atorvastatin/"]]
    },
    {
      name: "Sertraline", strength: "25 mg once daily, morning", group: "Mind & pain",
      cmc: "Started by CMC Psychiatry for anxiety symptoms linked to stress.",
      benefits: ["An SSRI antidepressant used for depression, OCD, panic disorder, PTSD and social anxiety (NHS)."],
      common: ["Headaches", "Feeling or being sick", "Dizziness or drowsiness", "Dry mouth", "Diarrhoea", "Sleep problems", "Sexual problems", "Weight gain", "Most ease after a couple of weeks (NHS)"],
      serious: ["Serotonin syndrome: fast heartbeat, sweating, shaking, twitching muscles, confusion or agitation", "Unusually high mood or energy, risky behaviour (mania)", "Very low mood or thoughts of self-harm (urgent help)", "Allergic reaction (call an ambulance)"],
      missed: "Skip it and take the next dose the next day as usual. Never take 2 doses (NHS).",
      ifStopped: "NHS: do not stop suddenly, because it may cause withdrawal symptoms. The dose is reduced gradually over several weeks or months.",
      watch: ["NHS lists painkillers 'such as aspirin and ibuprofen' as medicines that may not mix well; she takes aspirin.", "The NHS leaflet doesn't cover taking it together with duloxetine. This is on the 'For the doctor' list.", "Avoid alcohol, St John's wort and grapefruit juice (NHS)."],
      sources: [["NHS: sertraline", "https://www.nhs.uk/medicines/sertraline/"]]
    },
    {
      name: "Duloxetine", strength: "20 mg once daily", group: "Mind & pain",
      cmc: "On the discharge list; the summary doesn't say why.",
      benefits: ["An SNRI antidepressant used for depression and anxiety, and for nerve pain such as fibromyalgia (NHS).", "For nerve pain it 'reduces the pain messages nerves send to your brain' (NHS)."],
      common: ["Headaches", "Feeling or being sick", "Dizziness or drowsiness", "Dry mouth", "Diarrhoea or constipation", "Insomnia", "Sexual problems", "Weight loss", "Most ease after a couple of weeks (NHS)"],
      serious: ["Serotonin syndrome: fast heartbeat, sweating, shaking, twitching muscles, confusion or agitation", "Unexplained muscle pain or weakness", "Mania", "Very low mood or thoughts of self-harm (urgent help)", "Allergic reaction"],
      missed: "Take it as soon as you remember, unless it's nearly time for the next dose; then skip it. Never take 2 doses (NHS).",
      ifStopped: "NHS: do not stop suddenly, because it may cause withdrawal symptoms. The dose is reduced gradually over several weeks or months.",
      watch: ["NHS lists painkillers 'such as aspirin' and antiplatelet medicines as medicines that may not mix well.", "Combination with sertraline isn't covered by the leaflet; ask the doctor.", "Best not to drink alcohol (NHS)."],
      sources: [["NHS: duloxetine", "https://www.nhs.uk/medicines/duloxetine/"]]
    },
    {
      name: "Pregabalin", strength: "75 mg twice daily", group: "Mind & pain",
      cmc: "Rheumatology advised 'continuation of pregabalin 75 mg twice daily' for pains and tingling.",
      benefits: ["Treats nerve pain, generalised anxiety and epilepsy (NHS).", "It takes at least a few weeks to work (NHS)."],
      common: ["Headaches", "Feeling sleepy, tired or dizzy", "Difficulty sleeping", "Diarrhoea", "Mood changes", "Feeling or being sick", "Swollen hands, arms, legs and feet", "Blurred vision", "Weight gain", "Memory problems"],
      serious: ["Thoughts of self-harm (go to A&E / call an ambulance)", "Severe dizziness or passing out", "Seeing or hearing things that aren't there", "Problems peeing, blood in pee, or constipation", "Heartbeat faster or slower than usual", "Allergic reaction (call an ambulance)"],
      missed: "Take it as soon as you remember, unless the next dose is due within 2 hours; then skip it. Never take 2 doses (NHS).",
      ifStopped: "NHS: 'Do not stop taking pregabalin suddenly, even if you feel better.' Withdrawal can cause anxiety, sleep problems, feeling sick, pain and sweating. Some people become dependent. The dose is reduced gradually.",
      watch: ["Other medicines that cause sleepiness or dizziness can add to these effects; tell the doctor before taking strong painkillers like codeine or morphine (NHS).", "Best to avoid alcohol; it may affect breathing (NHS).", "Our note: dizziness plus her spine osteoporosis means falls are a particular worry."],
      sources: [["NHS: pregabalin side effects", "https://www.nhs.uk/medicines/pregabalin/side-effects-of-pregabalin/"], ["NHS: how and when to take", "https://www.nhs.uk/medicines/pregabalin/how-and-when-to-take-pregabalin/"], ["NHS: common questions", "https://www.nhs.uk/medicines/pregabalin/common-questions-about-pregabalin/"]]
    },
    {
      name: "Mego-XL", strength: "1 once daily", group: "Supplements",
      cmc: "On the discharge list; the summary doesn't say why. Her B12 (529) and folate (16.5) were within range at CMC.",
      benefits: ["Pharmacy listings show methylcobalamin (vitamin B12) + alpha-lipoic acid + vitamin B6 + folic acid. Check the pack.", "Vitamin B12 is used to prevent and treat B12 deficiency (NHS; that page covers a different form, cyanocobalamin).", "Folic acid is used to treat folate-deficiency anaemia (NHS)."],
      common: ["B12: acne-like spots or rash (NHS)", "Folic acid: bloating, wind, feeling sick, loss of appetite (NHS)"],
      serious: ["Allergic reaction: swollen face, throat or tongue, itchy rash, difficulty breathing (NHS)"],
      missed: "Folic acid: take it when you remember, then the next dose at the usual time; never 2 doses (NHS).",
      ifStopped: "Not stated in the leaflets, and CMC didn't write why it was prescribed. Ask the doctor whether it's still needed.",
      watch: ["The NHS B12 leaflet lists acid-reducing medicines such as omeprazole (the same family as her pantoprazole) as possibly not mixing well.", "The NHS folic acid leaflet lists aspirin among medicines that may not mix well, and warns that 'taking too many multivitamin tablets or capsules can be dangerous'.", "<b>Not verified:</b> no official leaflet could be reached for alpha-lipoic acid or vitamin B6, so nothing is said about them here. Ask the pharmacist."],
      sources: [["NHS: vitamin B12 (cyanocobalamin)", "https://www.nhs.uk/medicines/cyanocobalamin/"], ["NHS: folic acid", "https://www.nhs.uk/medicines/folic-acid/"], ["1mg: Mego-XL listing", "https://1mg.com/drugs/mego-xl-capsule-65346"]]
    },
    {
      name: "Shelcal 500", strength: "1 once daily", group: "Bones",
      cmc: "Calcium for osteoporosis (spine T-score −3.4).",
      benefits: ["Pharmacy listings: calcium carbonate (500 mg calcium) + vitamin D3 250 IU.", "Calcium supplement when diet alone isn't enough, for bones, muscles, nerves and heart (MedlinePlus)."],
      common: ["Upset stomach, stomach pain, belching", "Constipation", "Dry mouth, metallic taste", "Loss of appetite, passing more urine"],
      serious: ["The calcium carbonate leaflet doesn't list serious effects. Signs of too much calcium (from the vitamin D leaflet): vomiting, confusion, bone or joint pain, irregular heartbeat."],
      missed: "Take it when you remember, unless it's nearly time for the next dose. Don't double up (MedlinePlus).",
      ifStopped: "Not stated in the leaflet. CMC prescribed it as part of the osteoporosis treatment.",
      watch: ["MedlinePlus says calcium carbonate can affect other medicines and advises spacing it 1–2 hours apart from them. Ask the pharmacist how to time it with her other tablets."],
      sources: [["MedlinePlus: calcium carbonate", "https://medlineplus.gov/druginfo/meds/a601032.html"], ["Apollo Pharmacy: Shelcal 500", "https://www.apollopharmacy.in/otc/shelcal-500-calcium-vitamin-d3-tablet-30-s"]]
    },
    {
      name: "Calcirol 60,000 IU (vitamin D3)", strength: "Once a WEEK × 6 weeks, then once a MONTH × 6 months", group: "Bones",
      cmc: "Her vitamin D was 27 ng/ml (lab range >30). Prescribed as a course.",
      benefits: ["Treats and prevents vitamin D deficiency (NHS).", "Helps the body take in calcium and phosphorus from food; low vitamin D can lead to weak bones and osteoporosis (NHS)."],
      common: ["Stomach pain", "Feeling sick", "Headache"],
      serious: ["Signs of too much calcium: vomiting, confusion, bone or joint pain, irregular heartbeat", "High temperature with sharp pain in the side or lower back (possible kidney stones)", "Needing to pee more often, or swelling anywhere in the body"],
      missed: "NHS: take it when you remember unless it's nearly time for the next dose, then skip; never 2 doses. Her dose is weekly/monthly, not daily, so if one is missed ask the pharmacist.",
      ifStopped: "NHS: 'your symptoms may come back and your bone health may be affected.'",
      watch: ["This is a high-strength capsule taken once a week, then once a month. It is <b>not</b> a daily tablet.", "The NHS says doctors may check blood calcium during treatment; ask whether hers needs checking."],
      sources: [["NHS: colecalciferol", "https://www.nhs.uk/medicines/colecalciferol/"], ["NHS: side effects", "https://www.nhs.uk/medicines/colecalciferol/side-effects-of-colecalciferol/"]]
    },
    {
      name: "Zoledronic acid (drip)", strength: "CMC sheet: 4 mg in 100 ml saline over 1 hour, at hometown", group: "Bones",
      cmc: "Chosen by the family for osteoporosis (spine T-score −3.4, 'Fracture Risk: High'). Pre-medicines on the sheet: Avil, hydrocortisone 100 mg, paracetamol 1 g. Whether it has been given isn't recorded yet.",
      benefits: ["Prevents and treats osteoporosis (MedlinePlus).", "For osteoporosis it is given 'once every 1 to 2 years' (MedlinePlus). The usual osteoporosis dose is 5 mg, so confirm the 4 mg dose with the doctor."],
      common: ["Flu-like symptoms, fever, headache, chills, bone, joint or muscle pain, starting in the first 3 days and lasting 3–14 days (MedlinePlus; CMC wrote 2–3 days)", "Red, itchy or teary eyes", "Nausea, constipation, diarrhoea, stomach pain", "Pain or swelling where the drip went in"],
      serious: ["Jaw problems: painful or swollen gums, loosening teeth, numb or heavy jaw, a mouth sore that won't heal", "Dull, aching pain in the hips, groin or thighs (possible unusual thigh fracture)", "Irregular heartbeat or chest pain", "Muscle spasms, twitches or cramps", "Unusual bruising or bleeding", "Allergic reaction: rash, hives, trouble breathing or swallowing"],
      missed: "If a scheduled drip is missed, call the doctor as soon as possible (MedlinePlus).",
      ifStopped: "MedlinePlus says to continue as scheduled even if feeling well, and to discuss from time to time whether it's still needed. What happens if it's not given is not stated; CMC advised it because of the high fracture risk.",
      watch: ["A dentist should check her teeth before the first dose (MedlinePlus).", "Drink at least 2 glasses of water in the few hours before the drip; it may be delayed if she is dehydrated (MedlinePlus).", "Blood calcium is usually checked first, and kidney disease must be mentioned (MedlinePlus). Her creatinine rose from 0.7 to 1.0, so ask about a kidney check.", "MedlinePlus lists aspirin among medicines to tell the doctor about."],
      sources: [["MedlinePlus: zoledronic acid", "https://medlineplus.gov/druginfo/meds/a605023.html"], ["FDA label (Reclast, 5 mg for osteoporosis)", "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021817s032lbl.pdf"]]
    },
    {
      name: "Pantoprazole", strength: "40 mg once daily", group: "Stomach & bowel",
      cmc: "On the discharge list; the summary doesn't say why.",
      benefits: ["Reduces the amount of acid the stomach makes; treats heartburn, reflux and stomach ulcers (NHS).", "Usually taken first thing in the morning, about an hour before a meal (NHS)."],
      common: ["Most people have no side effects (NHS)", "Uncommon: headaches, diarrhoea, feeling sick, constipation, dry mouth, tiredness"],
      serious: ["Joint pain with a red rash on sun-exposed skin", "Liver problems: yellow skin or eyes, dark pee, worsening stomach pain", "Kidney problems: peeing less, painful peeing, lower back pain, swollen ankles", "Severe or lasting diarrhoea"],
      missed: "Take it when you remember, unless the next dose is due in less than 12 hours; then skip it. Never 2 doses (NHS).",
      ifStopped: "NHS: after long-term use, speak to the doctor first. 'Stopping suddenly could make your stomach produce a lot more acid', and reducing gradually prevents this.",
      watch: ["Use over 3 months: blood magnesium may drop (tiredness, confusion, dizziness, muscle twitches, irregular heartbeat) (NHS).", "Use over 1 year: may raise the risk of <b>bone fractures</b>, gut infections and low vitamin B12; the NHS says the doctor should check regularly. This matters with her osteoporosis."],
      sources: [["NHS: pantoprazole side effects", "https://www.nhs.uk/medicines/pantoprazole/side-effects-of-pantoprazole/"], ["NHS: how and when to take", "https://www.nhs.uk/medicines/pantoprazole/how-and-when-to-take-pantoprazole/"], ["NHS: common questions", "https://www.nhs.uk/medicines/pantoprazole/common-questions-about-pantoprazole/"]]
    },
    {
      name: "Naturolax (isabgol / ispaghula husk)", strength: "1 tablespoon in a glass of water, twice daily", group: "Stomach & bowel",
      cmc: "For bowel problems (probable IBS).",
      benefits: ["A fibre laxative for constipation: bulks up poo with fluid so it's softer (NHS, Fybogel, the same ingredient).", "Takes 2 or 3 days to work (NHS). The NHS leaflet doesn't discuss IBS."],
      common: ["Wind and bloating, especially when fibre is increased suddenly"],
      serious: ["Tummy pain with feeling or being sick: could be a bowel blockage, so get medical advice", "Allergic reaction (rare; call an ambulance)"],
      missed: "Skip the missed dose and take the next one at the usual time. Never 2 doses (NHS).",
      ifStopped: "Not stated. The NHS warns that without enough fluid, constipation may get worse.",
      watch: ["Always mix with plenty of cold water and drink plenty of fluid through the day; the NHS suggests adults aim for more than 2 litres.", "Take it at least 30 minutes before or after other medicines, and not right before bed (NHS).", "Try not to breathe in the powder (NHS)."],
      sources: [["NHS: Fybogel (ispaghula husk)", "https://www.nhs.uk/medicines/fybogel-ispaghula-husk/"], ["SastaSundar: Naturolax listing", "https://sastasundar.com/order-otc/naturolax-powder-100-g-zvu6uw"]]
    }
  ]
};
