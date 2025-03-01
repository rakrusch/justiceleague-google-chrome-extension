// Translation dictionary
const translations = {
  English: {
    link: "https://imgur.com/a/Gu3zLWH",
    summaryTitle: "Summary",
    summaryLinkTitle: "Expert-written",
    risksTitle: "Risk Analysis:",
    saferWebsites: "Consider using safer websites: ",
    riskBody:
      "An important risk to consider with this policy is that X may collect biometric information, which is not standard throughout many privacy policies. It is also important to consider your interactions with X, as information associated with your account may be shared with law enforcement.",
    summaryItems: [
      "Safety Score: 7.5/10",
      "May collect biometric information",
      "May collect device & connection information, like apps installed or IP address",
      "Information may be used to train AI models",
      "Information may be shared with law enforcement",
      "English is the language of reference for interpreting terms of X's privacy policy",
    ],
    privacyPolicyLink:
      "Click here to view this privacy policy in its entirety.",
  },
  Arabic: {
    link: "https://imgur.com/a/Gu3zLWH",
    summaryTitle: "ملخص",
    summaryLinkTitle: "مكتوب من قبل الخبراء",
    risksTitle: "تحليل المخاطر:",
    saferWebsites: "فكر في استخدام مواقع أكثر أمانًا: ",
    riskBody:
      "مخاطر مهمة يجب مراعاتها هي أن X قد يجمع معلومات بيومترية، وهو أمر غير شائع في العديد من سياسات الخصوصية. كما من المهم أن تضع في اعتبارك تفاعلاتك مع X، حيث قد تتم مشاركة المعلومات المرتبطة بحسابك مع جهات إنفاذ القانون.",
    summaryItems: [
      "درجة السلامة: 7.5/10",
      "قد يتم جمع المعلومات البيومترية",
      "قد يتم جمع معلومات الجهاز والاتصال، مثل التطبيقات المثبتة أو عنوان IP",
      "قد يتم استخدام المعلومات لتدريب نماذج الذكاء الاصطناعي",
      "قد تتم مشاركة المعلومات مع جهات إنفاذ القانون",
      "اللغة الإنجليزية هي اللغة المرجعية لتفسير شروط سياسة خصوصية X",
    ],
    privacyPolicyLink: "اضغط هنا لعرض سياسة الخصوصية بالكامل.",
  },
  Spanish: {
    link: "https://imgur.com/a/Gu3zLWH",
    summaryTitle: "Resumen",
    summaryLinkTitle:"Escrito por expertos",
    risksTitle: "Análisis de Riesgos:",
    saferWebsites: "Considere utilizar sitios web más seguros: ",
    riskBody:
      "Un riesgo importante a considerar con esta política es que X pueda recopilar información biométrica, lo cual no es estándar en muchas políticas de privacidad. También es importante considerar sus interacciones con X, ya que la información asociada con su cuenta puede compartirse con las autoridades.",
    summaryItems: [
      "Puntuación de seguridad: 7,5/10",
      "Puede recopilar información biométrica",
      "Puede recopilar información del dispositivo y de la conexión, como aplicaciones instaladas o dirección IP",
      "La información puede utilizarse para entrenar modelos de IA",
      "La información puede compartirse con las autoridades",
      "El inglés es el idioma de referencia para interpretar los términos de la política de privacidad de X",
    ],
    privacyPolicyLink:
      "Haga clic aquí para ver esta política de privacidad en su totalidad.",
  },
  Swahili: {
    link: "https://imgur.com/a/Gu3zLWH",
    summaryTitle: "Muhtasari",
    summaryLinkTitle: "Ulioandikwa na Mtaalam",
    risksTitle: "Uchambuzi wa Hatari:",
    saferWebsites: "Fikiria kutumia tovuti salama zaidi: ",
    riskBody:
      "Hatari muhimu ya kuzingatia ni kwamba X inaweza kukusanya taarifa za kibayometriki, jambo ambalo si la kawaida katika sera nyingi za faragha. Pia ni muhimu kuzingatia mwingiliano wako na X, kwani taarifa zinazohusiana na akaunti yako zinaweza kushirikiwa na vyombo vya kutekeleza sheria.",
    summaryItems: [
      "Alama ya Usalama: 7.5/10",
      "Inaweza kukusanya taarifa za kibayometriki",
      "Inaweza kukusanya taarifa za kifaa na muunganisho, kama programu zilizowekwa au anwani ya IP",
      "Taarifa inaweza kutumiwa kufundisha mifano ya AI",
      "Taarifa inaweza kushirikiwa na vyombo vya kutekeleza sheria",
      "Kiingereza ndicho lugha ya marejeo kwa kufasiri masharti ya sera ya faragha ya X",
    ],
    privacyPolicyLink: "Bofya hapa kuona sera ya faragha kwa ukamilifu.",
  },
};

function applyTranslation(language) {
  const translation = translations[language]; // Get the translation object

  if (!translation) {
    console.error(
      "Error: Translation for selected language not found:",
      language
    );
    return;
  }

  // Update headings
  const summaryTitleLink = document.getElementById("summaryTitleLink");
  const saferWebsites = document.getElementById("saferWebsites");
  const summaryTitle = document.getElementById("summaryTitle");
  summaryTitle.textContent = translation.summaryTitle;
  summaryTitleLink.textContent = translation.summaryLinkTitle;
  summaryTitleLink.href = translation.link; // Set the link dynamically
  saferWebsites.textContent = translation.saferWebsites;

  document.getElementById("risksTitle").textContent = translation.risksTitle;
  document.getElementById("riskBody").textContent = translation.riskBody;
  document.getElementById("privacyPolicyLink").textContent =
    translation.privacyPolicyLink;

  // Generate list items dynamically
  const summaryList = document.getElementById("summaryList");
  summaryList.innerHTML = ""; // Clear previous list items

  translation.summaryItems.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    summaryList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("closeButton");
  const settingsButton = document.getElementById("settingsButton");

  // Retrieve the saved language from localStorage, default to English if none is found
  const savedLanguage = localStorage.getItem("selectedLanguage") || "English";

  // Call function to apply the translations
  applyTranslation(savedLanguage);

  closeButton.addEventListener("click", () => {
    window.close();
  });

  settingsButton.addEventListener("click", () => {
    window.location.href = "settings-page.html";
  });
});
