-- CreateTable
CREATE TABLE "supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" SERIAL NOT NULL,
    "item_no" TEXT NOT NULL,
    "supplier_item_no" TEXT NOT NULL,
    "barcode_no" TEXT NOT NULL,
    "retail_price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "second_description" TEXT NOT NULL,
    "retail_gst" DECIMAL(65,30) NOT NULL,
    "wholesale_price" DECIMAL(65,30) NOT NULL,
    "wholesale_gst" DECIMAL(65,30) NOT NULL,
    "cost_price" DECIMAL(65,30) NOT NULL,
    "cost_gst" DECIMAL(65,30) NOT NULL,
    "sales_tax_code" VARCHAR(64) NOT NULL,
    "purchase_tax_code" VARCHAR(64) NOT NULL,
    "category_code" VARCHAR(64) NOT NULL,
    "subcategory_code" VARCHAR(64) NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "minimum_qty" INTEGER NOT NULL,
    "reorder_qty" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,
    "check_report" TEXT NOT NULL,
    "category_description" TEXT NOT NULL,
    "memo" TEXT NOT NULL,
    "invoice_id" INTEGER NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_record" (
    "id" SERIAL NOT NULL,
    "qty" INTEGER NOT NULL,
    "expiry_date" TEXT NOT NULL,
    "delivery_date" TEXT NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "inventory_id" INTEGER NOT NULL,

    CONSTRAINT "delivery_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "reviewed" BOOLEAN NOT NULL DEFAULT false,
    "total" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inventory_item_no_key" ON "inventory"("item_no");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_supplier_item_no_key" ON "inventory"("supplier_item_no");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoice_no_key" ON "invoice"("invoice_no");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_record" ADD CONSTRAINT "delivery_record_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_record" ADD CONSTRAINT "delivery_record_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
