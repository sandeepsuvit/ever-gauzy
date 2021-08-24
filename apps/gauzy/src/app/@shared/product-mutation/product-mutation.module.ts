import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NbCardModule,
	NbIconModule,
	NbButtonModule,
	NbInputModule
} from '@nebular/theme';
import {
	OrganizationsService,
	ProductCategoryService,
	ProductService,
	ProductTypeService,
	ProductVariantPriceService,
	ProductVariantService,
	ProductVariantSettingService
} from '../../@core/services';
import { ProductTypeMutationComponent } from './product-type-mutation/product-type-mutation.component';
import { ProductCategoryMutationComponent } from './product-category-mutation/product-category-mutation.component';
import { TranslateModule } from '../translate/translate.module';
import { ProductOptionGroupTranslationsComponent } from './product-option-group-translation/product-option-group-translation.component';
import { LanguageSelectorModule } from '../language/language-selector';

@NgModule({
	declarations: [
		ProductTypeMutationComponent,
		ProductCategoryMutationComponent,
		ProductOptionGroupTranslationsComponent
	],
	imports: [
		NbButtonModule,
		NbInputModule,
		NbCardModule,
		CommonModule,
		NbIconModule,
		TranslateModule,
		LanguageSelectorModule
	],
	providers: [
		ProductTypeService,
		ProductCategoryService,
		ProductService,
		ProductVariantService,
		ProductVariantSettingService,
		ProductVariantPriceService,
		OrganizationsService
	]
})
export class ProductMutationModule {}
