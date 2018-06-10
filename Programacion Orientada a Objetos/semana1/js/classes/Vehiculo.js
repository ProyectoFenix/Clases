class Vehiculo{
  constructor(pMarca, pModelo, pId, pAnno){
    let marca = pMarca,
        modelo = pModelo,
        id = pId,
        anno = pAnno;
    
    // Getters
    this.getMarca = () => {
      return marca;
    }
    this.getModelo = () => {
      return modelo;
    }
    this.getId = () => {
      return id;
    }
    this.getAnno = () => {
      return anno;
    }

    // Setters
    this.setMarca = (pnuevaMarca) => {
      marca = pnuevaMarca;
    }
    this.setModelo = (pnuevomodelo) => {
      modelo = pnuevomodelo;
    }
    this.setId = (pnuevoid) => {
      id = pnuevoid;
    }
    this.setAnno = (pnuevoanno) => {
      anno = pnuevoanno;
    }
  }
}