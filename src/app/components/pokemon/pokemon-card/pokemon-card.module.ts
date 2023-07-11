import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component';
import { SharedModule } from '../../../modules/shared_modules/shared.module';
import { RouterModule } from '@angular/router';
import { PokemonTypeComponent } from '../pokemon-type/pokemon-type.component';
import { AwesomeTooltipModule } from '../../../directives/tooltip/tooltip.module';
import { PokemonCarouselComponent } from '../pokemon-caurosel/pokemon-carousel.component';
import { PokemonFavoriteButtonComponent } from '../pokemon-favorite-button/pokemon-favorite-button.component';
import { ArrayFilterPipe } from '../../../pipes/array-filter/array-filter.pipe';

@NgModule({
  declarations: [PokemonCardComponent],
  exports: [PokemonCardComponent],
  imports: [
    CommonModule,
    PokemonTypeComponent,
    PokemonStatsComponent,
    PokemonCarouselComponent,
    SharedModule,
    RouterModule,
    ArrayFilterPipe,
    AwesomeTooltipModule,
    PokemonFavoriteButtonComponent
  ]
})
export class PokemonCardModule {}
