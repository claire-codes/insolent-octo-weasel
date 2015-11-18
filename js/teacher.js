function Teacher(equation) {
  this.equation = equation;
  this.fontSize = 40;
  this.createEquation = function() {
    // User input
    var fontSize = this.fontSize;

    var baseX = 0;
    var baseY = fontSize;
    var xmlns = "http://www.w3.org/2000/svg";

    var gvs = document.createElementNS(xmlns, "svg");
    gvs.setAttributeNS(null,"id","gvs");
    gvs.setAttributeNS(null,"style","border:1px solid black");
    document.body.appendChild(gvs);

    var formula = document.createElementNS(xmlns, "text");
    formula.setAttributeNS(null,"id","formula");
    formula.setAttributeNS(null,"x",baseX);
    formula.setAttributeNS(null,"y",baseY);
    formula.style.fontFamily = "Courier New";
    formula.style.fontSize = fontSize + "px";
    formula.textContent = this.equation;
    gvs.appendChild(formula);

    var x2 = document.getElementById('formula').getBBox().width + baseX;

    var line = document.createElementNS(xmlns, "line");
    line.setAttributeNS(null,"x1",baseX);
    line.setAttributeNS(null,"y1",fontSize * 2);
    line.setAttributeNS(null,"x2",x2);
    line.setAttributeNS(null,"y2",fontSize * 2);
    line.style.stroke = "#006600";
    gvs.appendChild(line);

    // This is not part of the finished SVG, this is just for reference
    var middle = (document.getElementById('formula').getBBox().width/2) + baseX;
    var axis = document.createElementNS(xmlns, "line");
    axis.setAttributeNS(null,"x1",middle);
    axis.setAttributeNS(null,"y1",0);
    axis.setAttributeNS(null,"x2",middle);
    axis.setAttributeNS(null,"y2",140);
    axis.style.stroke = "#006600";
    gvs.appendChild(axis);

    var numb = document.createElementNS(xmlns, "text");
    numb.textContent = '(1)';
    numb.setAttributeNS(null,"x",middle);
    numb.setAttributeNS(null,"y",fontSize * 3);
    numb.setAttributeNS(null,"text-anchor",'middle');
    numb.style.fontSize = fontSize + "px";
    numb.style.fontFamily = "Courier New";
    gvs.appendChild(numb);

    // gvs.setAttributeNS(null,"height","500px");
    gvs.setAttributeNS(null,"width",x2+"px");

    //TODO: work out minimum height

    return gvs;
  }
}

  
