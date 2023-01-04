const checkPage = async () => {
  const dropdown = document.getElementById("owebagdispoprelpiece_nantes");
  dropdown.value = "personne";
  dropdown.dispatchEvent(new Event("change"));

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const dropdown2 = document.getElementById("owebagdispoprelmotif");
  dropdown2.value = "71506";
  dropdown2.dispatchEvent(new Event("change"));

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const tabs = document.querySelectorAll(".dru_list_block");
  tabs.forEach(async (tab) => {
    const res = tab.innerHTML.match(
      /class="dru_list_info"><p>(.*?)<\/p>(.|\n)*01\/23/
    );
    if (res) {
      console.log(res[1]);
      const hours = tab.querySelectorAll(".heure_dispo");
      if (hours[0]) {
        console.log(hours);
        hours[hours.length - 1].click();
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const btn = document.querySelectorAll(".btn-nantes")[1];
        btn.click();
        clearInterval(interval);
        return;
      }
    }
  });
};
(async () => await new Promise((resolve) => setTimeout(resolve, 2000)))();
var interval = setInterval(checkPage, 11000);
