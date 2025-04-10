export const generateArray = (length: number, content: any) => {
  const replaceNamekey = (obj: any, index: number): any => {
    // Si es un string, reemplaza 'namekey' por el índice
    if (typeof obj === 'string') {
      return obj.replace(/namekey/g, (index + 1).toString());
    }
    
    // Si es un objeto (y no es null), procesa recursivamente sus propiedades
    if (typeof obj === 'object' && obj !== null) {
      const newObj = { ...obj };
      Object.keys(newObj).forEach(key => {
        newObj[key] = replaceNamekey(newObj[key], index);
      });
      return newObj;
    }
    
    // Si no es string ni objeto, devuelve el valor sin cambios
    return obj;
  };

  return Array.from({ length }, (_, index) => replaceNamekey(content, index));
};
