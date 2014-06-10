/**
 * @class
 * @classdesc This is a description of the Binary class.
 */
function Binary(){};
/**
 * The function compares bytes with a string signature.
 * <p>The signature may contain both lowercase and uppercase characters.
 * Gaps are skipped while processing lines, and “.” and “?” represent any character.
 * <p>Can use ANSI symbols too. For example "01'Test'01".
 * <p>In the PE class can use # and $:
 * <p># for absolute jump
 * <p>$ for relative jump

 * @param {String} sString - The signature.
 * @param {UInt} nOffset - The offset in the file. By default is 0.
 * @returns {Bool} 
 * @example
    if(Binary.compare("'7z'BCAF271C")) // Compare file header(nOffset=0)
    {
        sVersion=Binary.readByte(6)+"."+Binary.readByte(7);
        bDetected=1;
    }
 * @example
    if(Binary.compare("'WAVEfmt '",8)) // Compare file from offset 8
    {
        bDetected=1;
    }
 */
Binary.compare=function(sString,nOffset){};
/**
 * Search for byte in the file.
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {UChar} cValue - The byte value.
 * @returns {Int} The function returns the offset in the file, if the value is found. If nothing is found, -1 is returned.
 */
Binary.findByte=function(nOffset,nSize,cValue){};
/**
 * Search for word in the file.
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {UShort} sValue - The word value.
 * @returns {Int} The function returns the offset in the file, if the value is found. If nothing is found, -1 is returned.
 */
Binary.findWord=function(nOffset,nSize,sValue){};
/**
 * Search for dword in the file.
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {UInt} nValue - The dword value.
 * @returns {Int} The function returns the offset in the file, if the value is found. If nothing is found, -1 is returned.
 */
Binary.findDword=function(nOffset,nSize,nValue){};
/**
 * Search for string in the file.
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {String} sValue - The string value.
 * @returns {Int} The function returns the offset in the file, if the value is found. If nothing is found, -1 is returned.
 */
Binary.findString=function(nOffset,nSize,sValue){};
/**
 * Search for signature in the file.
 * @see {@link Binary.compare}
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {String} sValue - The signature.
 * @returns {Int} The function returns the offset in the file, if the signature is found. If nothing is found, -1 is returned.
 */
Binary.findSignature=function(nOffset,nSize,sValue){};
/**
 * Get file directory
 * @returns {String} 
 */
Binary.getFileDirectory=function(){};
/**
 * Get file size
 * @returns {UInt} 
 */
Binary.getSize=function(){};
/**
 * Get string value from file.
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nOffset - The size of memory. By default is 50
 * @returns {String} 
 */
Binary.getString=function(nOffset,nSize){};
/**
 * This function checks whether there exists a signature. 
 * @see {@link Binary.compare}
 * @param {UInt} nOffset - The offset in the file.
 * @param {UInt} nSize - The size of memory.
 * @param {String} sValue - The signature.
 * @returns {Bool}
 */
Binary.isSignaturePresent=function(nOffset,nSize,sSignature){};
/**
 * Read byte value from the file.
 * @param {UInt} nOffset - The offset in the file.
 * @returns {UChar} The byte value.
 */
Binary.readByte=function(nOffset){};
/**
 * Read dword value from the file.
 * @param {UInt} nOffset - The offset in the file.
 * @returns {UInt} The dword value.
 */
Binary.readDword=function(nOffset){};
/**
 * Read word from the file.
 * @param {UInt} nOffset - The offset in the file.
 * @returns {UShort} The word value.
 */
Binary.readWord=function(nOffset){};