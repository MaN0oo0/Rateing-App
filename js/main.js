import { Rater } from "./rater.js";
import { get, getAll } from "./Selector.js";
document.addEventListener("DOMContentLoaded", function () {
  const raters = getAll("[role=rater]");
  raters.forEach((rater) => {
    new Rater(rater);
  });
  //   console.log(
  //     get("#rater-1").text("Mohamed Ahmed").css({
  //       fontSize: "6rem",
  //       color: "red",
  //     })
  //   );
  //   get("#rater-2").html("<b>Mohamed</b>").css({
  //     color: "blue",
  //   });
  //   get("#rater-2")
  //     .removeClass("star-rater")
  //     .addClass("ShowClass", "FontShape")
  //     .html("<b>Mohamed</b>");

  get("#ClickMe").on("click", (e) => {
    console.log("btn clicked");
    console.log(e.target);
    if (get("#text").val()) {
      get("#list").append('li',get("#text").val());
      get("#text").val(" ");
      // clear the input field
    }
  });
});
