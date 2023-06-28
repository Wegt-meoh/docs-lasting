import { AbstractBlock, Extensions } from "asciidoctor/types";

const dfs: Parameters<Extensions.TreeProcessorDsl["process"]>["0"] = function (
  this,
  doc
) {
  if (!doc.hasBlocks()) return;

  const blocks: AbstractBlock[] = doc.getBlocks();
  blocks.forEach((block, index) => {
    // if(block.)
  });
};

export function imageTreeProcessor(registry: Extensions.Registry) {
  registry.treeProcessor(function (this: Extensions.TreeProcessorDsl) {
    const self = this;
    self.process(dfs);
  });
}
