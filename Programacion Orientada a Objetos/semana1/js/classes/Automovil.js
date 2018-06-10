class Automovil extends Vehiculo{
  constructor(pMarca, pModelo, pId, pAnno, pTipoCombustible){
    super(pMarca, pModelo, pId, pAnno);
    let tipoCombustible = pTipoCombustible;

    // Getters
    this.getCombustible = () => {
      return tipoCombustible;
    }

    // Setters
    this.setCombustible = (pnuevoCombustible) => {
      tipoCombustible = pnuevoCombustible;
    }
  }

  getNombreTipoCombustible(){
    let tipo;

    if(this.getCombustible() == true){
      tipo = "Regular";
    }else{
      tipo = "Super";
    }

    return tipo;
  }
}