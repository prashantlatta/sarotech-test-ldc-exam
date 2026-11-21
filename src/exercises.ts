
export type Exercise = {
  id: string;
  title: string;
  instruction: string;
  module: 'Word' | 'Excel';
  durationMinutes: number;
  marks: number;
  source: string;
};

const wordExercisesData = [
  ["word-01","Document Setup","Set page size to A4, portrait orientation and 2 cm margins."],
  ["word-02","Font Formatting","Apply the specified font family and size to the complete document."],
  ["word-03","Text Emphasis","Apply bold, italic and underline to the indicated phrases."],
  ["word-04","Paragraph Alignment","Set the title to centre alignment and body paragraphs to justified."],
  ["word-05","Line Spacing","Set body paragraphs to 1.5 line spacing."],
  ["word-06","Paragraph Indentation","Apply first-line indentation to each body paragraph."],
  ["word-07","Paragraph Spacing","Set 6 pt spacing after body paragraphs."],
  ["word-08","Bulleted List","Convert the marked lines into a bulleted list."],
  ["word-09","Numbered List","Convert the marked steps into a numbered list."],
  ["word-10","Multilevel List","Create a two-level numbered list from the outline."],
  ["word-11","Find and Replace","Replace every occurrence of the given word with its replacement."],
  ["word-12","Header","Insert the supplied text in the document header."],
  ["word-13","Footer","Insert the supplied footer text and align it right."],
  ["word-14","Page Number","Insert page numbers in the footer."],
  ["word-15","Page Border","Apply a simple box page border."],
  ["word-16","Text Highlight","Highlight the specified key terms."],
  ["word-17","Font Colour","Change the specified heading to the required font colour."],
  ["word-18","Change Case","Convert the selected heading to uppercase."],
  ["word-19","Columns","Format the selected notice text into two columns."],
  ["word-20","Section Break","Insert a section break before the second section."],
  ["word-21","Table Creation","Create a table with the specified rows and columns."],
  ["word-22","Table Formatting","Apply borders and header-row emphasis to the table."],
  ["word-23","Cell Alignment","Centre-align the contents of the selected table cells."],
  ["word-24","Cell Merge","Merge the indicated cells in the first table row."],
  ["word-25","Row Height","Set the specified table row height."],
  ["word-26","Column Width","Adjust the table columns to the supplied widths."],
  ["word-27","Insert Picture","Insert the supplied picture at the marked location."],
  ["word-28","Picture Wrapping","Set the picture text wrapping as instructed."],
  ["word-29","Hyperlink","Create a hyperlink using the supplied display text and address."],
  ["word-30","Footnote","Insert a footnote at the indicated sentence."],
  ["word-31","Page Break","Insert a page break before the next heading."],
  ["word-32","Watermark","Apply the supplied text as a document watermark."],
  ["word-33","Styles","Apply Heading 1 and Heading 2 styles to the marked headings."],
  ["word-34","Navigation Pane","Use heading styles so the document outline is navigable."],
  ["word-35","Tab Stops","Set a right-aligned tab stop for the listed values."],
  ["word-36","Drop Cap","Apply a drop cap to the first paragraph."],
  ["word-37","Text Box","Insert a text box containing the supplied notice."],
  ["word-38","Shapes","Insert and format the specified basic shape."],
  ["word-39","Mail Merge","Prepare a simple letter using the supplied recipient fields."],
  ["word-40","Spelling Review","Run spelling review and correct the marked errors."],
  ["word-41","Document Properties","Set the document title and author properties."],
  ["word-42","Print Layout","Verify page layout and remove unwanted blank pages."],
  ["word-43","Table of Contents","Insert a table of contents from the heading styles."],
  ["word-44","Track Changes","Enable Track Changes and make the specified edit."],
  ["word-45","Comments","Add a comment to the marked sentence."],
  ["word-46","Page Orientation","Change only the specified section to landscape."],
  ["word-47","Different First Page","Enable a different first-page header/footer."],
  ["word-48","Text Direction","Set the selected table cell text direction."],
  ["word-49","Sort Table","Sort the table records by the specified column."],
  ["word-50","Final Formatting","Apply consistent heading, body and page formatting."],
] as const;

const excelExercisesData = [
  ["excel-01","SUM","Calculate the total of the supplied numeric range using SUM."],
  ["excel-02","AVERAGE","Calculate the average of the supplied values."],
  ["excel-03","MIN and MAX","Find the minimum and maximum values in the data."],
  ["excel-04","COUNT","Count numeric entries in the specified range."],
  ["excel-05","COUNTA","Count non-empty cells in the specified range."],
  ["excel-06","IF","Use IF to display Pass or Fail based on the given condition."],
  ["excel-07","SUMIF","Sum values that meet the supplied criterion."],
  ["excel-08","COUNTIF","Count records matching the supplied criterion."],
  ["excel-09","AVERAGEIF","Average values matching the supplied criterion."],
  ["excel-10","Percentage","Calculate percentage using an absolute or relative reference as required."],
  ["excel-11","Relative Reference","Copy a formula using relative cell references."],
  ["excel-12","Absolute Reference","Use an absolute reference in a copied formula."],
  ["excel-13","Mixed Reference","Use a mixed reference in the supplied calculation."],
  ["excel-14","Cell Formatting","Apply the requested font, fill and border formatting."],
  ["excel-15","Number Format","Format values as currency with two decimal places."],
  ["excel-16","Date Format","Display dates in the requested date format."],
  ["excel-17","Percentage Format","Display the selected values as percentages."],
  ["excel-18","Merge and Centre","Merge the title cells and centre the title."],
  ["excel-19","Alignment","Apply horizontal and vertical cell alignment."],
  ["excel-20","Wrap Text","Enable Wrap Text for the selected headings."],
  ["excel-21","Column Width","Set the specified column widths."],
  ["excel-22","Row Height","Set the specified row heights."],
  ["excel-23","Borders","Apply outside and inside borders to the data range."],
  ["excel-24","Sort Ascending","Sort records by the selected field in ascending order."],
  ["excel-25","Sort Descending","Sort records by the selected field in descending order."],
  ["excel-26","Filter","Apply an AutoFilter to the supplied data table."],
  ["excel-27","Freeze Panes","Freeze the required heading rows or columns."],
  ["excel-28","Conditional Formatting","Highlight values that satisfy the stated condition."],
  ["excel-29","Data Validation","Create a drop-down list from the supplied choices."],
  ["excel-30","Remove Duplicates","Remove duplicate records from the selected range."],
  ["excel-31","Text to Columns","Split the supplied delimited text into separate columns."],
  ["excel-32","Concatenate","Join the supplied text fields into one result."],
  ["excel-33","LEFT and RIGHT","Extract the requested characters using LEFT or RIGHT."],
  ["excel-34","LEN","Return the character count for each supplied text value."],
  ["excel-35","TODAY","Insert a formula that returns the current date."],
  ["excel-36","ROUND","Round the supplied calculation to the requested decimal places."],
  ["excel-37","SUBTOTAL","Calculate a subtotal that responds to filtered rows."],
  ["excel-38","Chart","Create a suitable chart from the supplied data."],
  ["excel-39","Print Area","Set the print area and fit the sheet to one page wide."],
  ["excel-40","Sheet Management","Rename the sheet and set the requested tab colour."],
] as const;

function createExercises(
  items: readonly (readonly [string, string, string])[],
  module: Exercise['module']
): Exercise[] {
  return items.map(([id, title, instruction]) => ({
    id,
    title,
    instruction,
    module,
    durationMinutes: 10,
    marks: 5,
    source: 'original_practice',
  }));
}

export const wordExercises: Exercise[] =
  createExercises(wordExercisesData, 'Word');

export const excelExercises: Exercise[] =
  createExercises(excelExercisesData, 'Excel');
