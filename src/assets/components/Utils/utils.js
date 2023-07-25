export const formatText = (text = "") => {
    text = text.split("\n");
    let fText = "";
    text.map((i) => {
        return (fText += "<p>" + i + "</p>");
    });
    return fText;
};
