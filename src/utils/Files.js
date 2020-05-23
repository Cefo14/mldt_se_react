import { saveAs } from 'file-saver';

export default class Files {
  /**
   *
   * @param {File} file
   */
  constructor(file) {
    this.file = file;
    this.dataView = new DataView(new ArrayBuffer(''));
  }

  /**
   *
   * @returns {String}
   */
  init = () => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      this.dataView = new DataView(reader.result);
      resolve(reader);
    };

    reader.onerror = () => {
      reader.abort();
      reject();
    };

    reader.readAsArrayBuffer(this.file);
  })

  /**
   * @param {Number} offset
   * @param {Boolean} littleEndian;
   * @returns {Number}
   */
  readTiny = (offset, littleEndian = true) => {
    try {
      return this.dataView.getUint8(offset, littleEndian);
    }

    catch {
      return NaN;
    }
  };

  /**
   * @param {Number} offset
   * @param {Boolean} littleEndian;
   * @returns {Number}
   */
  readShort = (offset, littleEndian = true) => {
    try {
      return this.dataView.getUint16(offset, littleEndian);
    }

    catch {
      return NaN;
    }
  };

  /**
   * @param {Number} offset
   * @param {Boolean} littleEndian;
   * @returns {Number}
   */
  readInt = (offset, littleEndian = true) => (
    this.dataView.getUint32(offset, littleEndian)
  );

  /**
   * @param {Number} offset
   * @param {Boolean} littleEndian;
   * @returns {Number}
   */
  readInt = (offset, littleEndian = true) => (
    this.dataView.getUint32(offset, littleEndian)
  );

  /**
   * @param {Number} offset
   * @param {Number} value;
   */
  writeTiny = (offset, value, littleEndian = true) => (
    this.dataView.setUint8(offset, value, littleEndian)
  );

  /**
   * @param {Number} offset
   * @param {Number} value;
   */
  writeShort = (offset, value, littleEndian = true) => (
    this.dataView.setUint16(offset, value, littleEndian)
  );

  /**
   * @param {Number} offset
   * @param {Number} value;
   */
  writeInt = (offset, value, littleEndian = true) => (
    this.dataView.setUint32(offset, value, littleEndian)
  );

  save = () => {
    const blob = new Blob([this.dataView], { type: this.file.type });
    saveAs(blob, this.file.name);
    return blob;
  }
}
