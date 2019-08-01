<?php

/*MS Office 2007 extensions (pptx, xlsx, docx) do not have a default Mime type, they have "application/zip" mime type, so, to fix that, i do one little function to verify the extension.
That function allow's you to be safe of fake extensions hack.
*/

$arrayZips = array("application/zip", "application/x-zip", "application/x-zip-compressed");

$arrayExtensions = array(".pptx", ".docx", ".dotx", ".xlsx");

$file = 'path/to/file.xlsx';

$original_extension = (false === $pos = strrpos($file, '.')) ? '' : substr($file, $pos);

$finfo = new finfo(FILEINFO_MIME);

$type = $finfo->file($file);

if (in_array($type, $arrayZips) && in_array($original_extension, $arrayExtensions))
{
   return $original_extension;
}

?>
