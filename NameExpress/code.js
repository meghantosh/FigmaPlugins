console.log(figma.root.name);
for (const node of figma.currentPage.selection) {
    console.log(node.name);
    node.name += figma.root.name;
    console.log(node.name);
}
figma.closePlugin();
